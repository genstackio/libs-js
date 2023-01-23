import { useMemo } from 'react';
import useUser from '@genstackio/react-contexts/lib/hooks/useUser';
import { useTranslation } from 'react-i18next';
import { list } from '@genstackio/react-admin-ui/lib/types';
import { useHistory } from 'react-router-dom';
import { list_ctx } from '../types';

export function useList(name: string, factory: (name: string, ctx: list_ctx) => list, {}: any = {}, forcedList?: list) {
    const [user] = useUser();
    const history = useHistory();
    const { t } = useTranslation();

    return useMemo(
        () => forcedList || factory(name, { t, user, history }),
        [history, factory, name, t, user, forcedList],
    );
}

export default useList;
