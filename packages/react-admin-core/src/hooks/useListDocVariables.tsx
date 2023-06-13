import { useEffect, useMemo } from 'react';
import useListDocDeleteCallback from './useListDocDeleteCallback';
import useListDocPage from './useListDocPage';
import useListColumns from './useListColumns';
import useListPageSizeChangeCallback from './useListPageSizeChangeCallback';
import useListPageChangeCallback from './useListPageChangeCallback';
import useListSwitchChangeCallback from './useListSwitchChangeCallback';
import useListSortModelChangeCallback from './useListSortModelChangeCallback';

export function useListDocVariables({
    columns: rawColumns,
    goDoc,
    goEdit,
    goPublicPage,
    singularName,
    list,
    setSortModel,
    setSearchMode,
    listRoute,
    name,
    filterName,
    deleteDoc,
    queryName,
    fetchSortVariables,
    searchMode,
    cursor,
    page,
    navigationMode,
    key,
    setPage,
    pPage,
}: {
    name: string;
    queryName: string;
    searchMode: boolean;
    cursor?: string;
    page: any;
    fetchSortVariables: any;
    navigationMode: string;
    filterName?: string;
    deleteDoc: Function;
    setPage: Function;
    key: string;
    listRoute: string;
    setSearchMode: Function;
    setSortModel: Function;
    pPage: string;
    singularName: string;
    goEdit: Function;
    goDoc: Function;
    goPublicPage: Function;
    list: any;
    columns?: any;
}) {
    const { data, loading, error, refetch } = useListDocPage({
        queryName,
        cursor,
        pageSize: page.size,
        fetchSortVariables,
    });

    const onDelete = useListDocDeleteCallback({
        deleteDoc,
        setPage,
        pageSize: page.size,
        pageIndex: page.index,
        pagePreviousCursors: page.previousCursors,
        pageCurrentCursor: page.currentCursor,
        fetchSortVariables,
        refetch,
    });
    const onPageSizeChange = useListPageSizeChangeCallback({
        listRoute,
        name,
        searchMode,
        setPage,
        filterName,
        navigationMode,
    });

    const nextCursor = ((data || {})[key] || {})['cursor'];

    const onPageChange = useListPageChangeCallback({
        name,
        listRoute,
        navigationMode,
        setPage,
        pageSize: page.size,
        pageIndex: page.index,
        pagePreviousCursors: page.previousCursors,
        cursor,
        nextCursor,
        searchMode,
        filterName,
    });
    const handleSwitchChange = useListSwitchChangeCallback({
        name,
        listRoute,
        setSearchMode,
        searchMode,
        pageSize: page.size,
        setPage,
        filterName,
        navigationMode,
    });
    const onSortModelChange = useListSortModelChangeCallback({
        setSortModel,
    });

    const columns = useListColumns({
        columns: rawColumns,
        searchMode,
        list,
        goDoc,
        goEdit,
        onDelete,
        goPublicPage,
        singularName,
    });
    const total = searchMode ? ((data || {})[key] || {})['count'] || 0 : undefined;
    const items = ((data || {})[key] || {})['items'] || [];
    const displayPage = (!!items.length || !loading) && (page.index > 0 || !!nextCursor);

    const switchDefaultValues = useMemo(() => ({ searchMode }), [searchMode]);

    const errorProps = useMemo(() => ({ error }), [error]);
    const tableProps = useMemo(
        () => ({
            items,
            loading,
            onSortModelChange,
            onPageSizeChange,
            onPageChange,
            columns,
            total: undefined !== total ? total : nextCursor ? 1000 : page.index * page.size + items.length,
        }),
        [items, loading, onSortModelChange, onPageSizeChange, onPageChange, page.index, columns, page.size, nextCursor],
    );
    const toolbarProps = useMemo(
        () => ({
            items,
            loading,
            nextCursor,
            switchDefaultValues,
            handleSwitchChange,
            displayPage,
            total: searchMode ? total : undefined,
        }),
        [items, loading, nextCursor, switchDefaultValues, handleSwitchChange, displayPage, searchMode],
    );

    useEffect(() => {
        if ('page' === navigationMode) {
            const pp = parseInt((pPage || '1') as string) - 1;
            if (pp > page.index) {
                setPage({
                    size: page.size,
                    index: pp,
                    previousCursors: [...((page.previousCursors as unknown as any) || []), cursor],
                    currentCursor: nextCursor,
                });
            } else if (pp < page.index) {
                setPage({
                    size: page.size,
                    index: pp,
                    previousCursors: page.previousCursors.slice(0, -1),
                    currentCursor: page.previousCursors.slice(-1)[0],
                });
            } else {
                /* equals */
                setPage({
                    size: page.size,
                    index: pp,
                    previousCursors: page.previousCursors,
                    currentCursor: page.currentCursor,
                });
            }
        }
    }, [
        pPage,
        setPage,
        cursor,
        page.currentCursor,
        page.size,
        page.index,
        page.previousCursors,
        nextCursor,
        navigationMode,
    ]);

    return useMemo(
        () => ({
            items,
            errorProps,
            tableProps,
            toolbarProps,
        }),
        [items, errorProps, tableProps, toolbarProps],
    );
}

export default useListDocVariables;
