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
                item['active'] = location.pathname === item['target'];
            }
            if ('string' === typeof item['target']) {
                const target = item['target'];
                item['target'] = () => history.push(target);
            }
            return item;
        },
        [t, location, history],
    );

    return useMemo(
        () => forcedMenu || factory(name, { t, user, history }).map(itemMapper),
        [itemMapper, factory, name, t, user, forcedMenu],
    );
}

export default useMenu;
