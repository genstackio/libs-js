import useComponent from '@genstackio/react-contexts/lib/hooks/useComponent';
import { BaseListBreadcrumbsProps } from '../misc/DefaultListBreadcrumbs';

export function ListBreadcrumbs(props: ListBreadcrumbsProps) {
    const Comp = useComponent('misc', 'default_list_breadcrumbs');

    return <Comp {...props} />;
}

export type ListBreadcrumbsProps = BaseListBreadcrumbsProps;

// noinspection JSUnusedGlobalSymbols
export default ListBreadcrumbs;
