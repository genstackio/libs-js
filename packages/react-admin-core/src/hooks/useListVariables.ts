import useListDocVariables from './useListDocVariables';
import useListCommonVariables from './useListCommonVariables';
import { useMemo } from 'react';

export function useListVariables(props: {
    name: string;
    singularName?: string;
    defaultRowsPerPage?: number;
    displayRoute?: string;
    newRoute?: string;
    onNewClick?: Function;
    search?: boolean;
    editRoute?: string;
    deletable?: boolean;
    deleteQueryName?: string;
    filterName?: string;
    filters?: any;
    listRoute?: string;
    columns?: { id: string; format?: any; label?: string; width?: number; render?: Function }[];
    navigationMode?: string;
    listFirstPageRoute?: string;
    searchSwitch?: boolean;
}) {
    const {
        breadcrumbsProps,
        tableProps: tablePropsA,
        toolbarProps: toolbarPropsA,
        ...vars
    } = useListCommonVariables(props);
    const { items, errorProps, tableProps: tablePropsB, toolbarProps: toolbarPropsB } = useListDocVariables(vars);

    const toolbarProps = useMemo(() => ({ ...toolbarPropsA, ...toolbarPropsB }), [toolbarPropsA, toolbarPropsB]);
    const tableProps = useMemo(() => ({ ...tablePropsA, ...tablePropsB }), [tablePropsA, tablePropsB]);

    return useMemo(
        () => ({ items, breadcrumbsProps, toolbarProps, errorProps, tableProps }),
        [items, breadcrumbsProps, toolbarProps, errorProps, tableProps],
    );
}

export default useListVariables;
