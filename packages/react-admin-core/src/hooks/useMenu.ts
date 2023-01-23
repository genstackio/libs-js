import { useCallback, useMemo } from 'react';
import useUser from '@genstackio/react-contexts/lib/hooks/useUser';
import { useTranslation } from 'react-i18next';
import { menu_item } from '@genstackio/react-admin-ui/lib/types';
import { useHistory, useLocation } from 'react-router-dom';
import { menu_ctx } from '../types';

export function useMenu(
    name: string,
    factory: (name: string, ctx: menu_ctx) => menu_item[],
    {}: any = {},
    forcedMenu?: menu_item[],
) {
    const [user] = useUser();
    const history = useHistory();
    const location = useLocation();
    const { t } = useTranslation();

    const itemMapper = useCallback(
        (item) => {
            'string' === typeof item['label'] && (item['label'] = t(item['label']));
            if ('item' === item['type']) {
                if ('function' === typeof item['active']) {
                    item['active'] = (item['active'] as Function)(location.pathname);
                } else {
                    if (item['activePrefix']) {
                        item['active'] =
                            item['activePrefix'] === (location.pathname || '').slice(0, item['activePrefix'].length);
                    } else {
                        item['active'] = location.pathname === item['target'];
                    }
                }
            }
            if ('string' === typeof item['target']) {
                const target = item['target'];
                if ('/' === target.slice(0, 1)) {
                    item['target'] = {
                        href: target,
                        onClick: (e: any) => {
                            !!e && !!e.preventDefault && e.preventDefault();
                            !!e && !!e.stopPropagation() && e.stopPropagation();
                            history.push(target);
                        },
                    };
                }
            }
            return item;
        },
        [t, location, history],
    );

    return useMemo(
        () => forcedMenu || (factory(name, { t, user, history }) || []).map(itemMapper),
        [itemMapper, factory, name, t, user, history, forcedMenu],
    );
}

export default useMenu;
