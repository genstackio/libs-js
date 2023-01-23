import ListBreadcrumbs from '../../organisms/ListBreadcrumbs';
import ListToolbar from '../../organisms/ListToolbar';
import ListError from '../../organisms/ListError';
import ListTable from '../../organisms/ListTable';
import useListVariables from '../../hooks/useListVariables';
import { list } from '@genstackio/react-admin-ui/lib/types';
import { breadcrumb_item } from '@genstackio/react-admin-ui/lib/types';

function ListScreenTemplate({ children, ...props }: ListScreenTemplateProps) {
    const { breadcrumbsProps, toolbarProps, errorProps, tableProps, items } = useListVariables(props);

    const c = 'function' === typeof children ? children({ items }) : !!children ? children : false;

    return (
        <>
            <ListBreadcrumbs {...breadcrumbsProps} />
            {!c && <ListToolbar {...toolbarProps} />}
            <ListError {...errorProps} />
            {!!c && children}
            {!c && <ListTable {...tableProps} />}
        </>
    );
}

export interface ListScreenTemplateProps {
    children?: any;
    filterName?: string;
    filters?: any;
    navigationMode?: 'page' | 'state';
    name: string;
    onNewClick?: Function;
    columns?: { id: string; format?: any; label?: string; width?: number; render?: Function }[];
    list?: list;
    breadcrumbs?: breadcrumb_item[];
    defaultRowsPerPage?: number;
    singularName?: string;
    listRoute?: string;
    listFirstPageRoute?: string;
    displayRoute?: string;
    editRoute?: string;
    newRoute?: string;
    deleteQueryName?: string;
    search?: boolean;
    searchSwitch?: boolean;
    deletable?: boolean;
}

// noinspection JSUnusedGlobalSymbols
export default ListScreenTemplate;
