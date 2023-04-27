import ScreenHeader from '@genstackio/react-admin-ui/lib/organisms/ScreenHeader';
import { breadcrumb_item, breadcrumb_item_adhoc } from '@genstackio/react-admin-ui/lib/types';

export function DefaultListBreadcrumbs({ breadcrumbs }: DefaultListBreadcrumbsProps) {
    return !!breadcrumbs.length ? (
        <ScreenHeader items={breadcrumbs as breadcrumb_item_adhoc[]} className={'mt-3 mb-5'} />
    ) : null;
}

export type DefaultListBreadcrumbsProps = BaseListBreadcrumbsProps;

export interface BaseListBreadcrumbsProps {
    breadcrumbs: breadcrumb_item[];
}

// noinspection JSUnusedGlobalSymbols
export default DefaultListBreadcrumbs;
