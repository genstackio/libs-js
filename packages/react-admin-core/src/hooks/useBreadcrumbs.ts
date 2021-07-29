import { useMemo } from 'react';
import useUser from '@genstackio/react-contexts/lib/hooks/useUser';
import { useTranslation } from 'react-i18next';
import { breadcrumb_item } from '@genstackio/react-admin-ui/lib/types';
import { useHistory } from 'react-router-dom';
import { breadcrumbs_ctx } from '../types';

export function useBreadcrumbs(
    name: string,
    factory: (name: string, ctx: breadcrumbs_ctx) => breadcrumb_item[],
    { id }: { id?: string } = {},
    forcedBreadcrumbs?: breadcrumb_item[],
) {
    const [user] = useUser();
    const history = useHistory();
    const { t } = useTranslation();

    return useMemo(
        () => forcedBreadcrumbs || factory(name, { t, user, history, id }),
        [factory, name, t, user, id, forcedBreadcrumbs],
    );
}

export default useBreadcrumbs;
