import useComponent from '@genstackio/react-contexts/lib/hooks/useComponent';
import DefaultListBreadcrumbs, { BaseListBreadcrumbsProps } from '../misc/DefaultListBreadcrumbs';

export function ListBreadcrumbs(props: ListBreadcrumbsProps) {
    const Comp = useComponent('misc', 'list_breadcrumbs') || DefaultListBreadcrumbs;

    return <Comp {...props} />;
}

export type ListBreadcrumbsProps = BaseListBreadcrumbsProps;

// noinspection JSUnusedGlobalSymbols
export default ListBreadcrumbs;
