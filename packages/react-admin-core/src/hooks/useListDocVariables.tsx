import { useEffect, useMemo } from 'react';
import useListDocDeleteCallback from './useListDocDeleteCallback';
import useListDocPage from './useListDocPage';
import useListColumns from './useListColumns';
import useListPageSizeChangeCallback from './useListPageSizeChangeCallback';
import useListPageChangeCallback from './useListPageChangeCallback';
import useListSwitchChangeCallback from './useListSwitchChangeCallback';
import useListSortModelChangeCallback from './useListSortModelChangeCallback';

export function useListDocVariables(vars: {
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
}) {
    const { searchMode, cursor, page, navigationMode, key, setPage, pPage } = vars;

    const { data, loading, error, refetch } = useListDocPage(vars);

    const onDelete = useListDocDeleteCallback({ ...vars, refetch });
    const onPageSizeChange = useListPageSizeChangeCallback(vars);
    const onPageChange = useListPageChangeCallback(vars);
    const handleSwitchChange = useListSwitchChangeCallback(vars);
    const onSortModelChange = useListSortModelChangeCallback(vars);

    const columns = useListColumns({ onDelete, ...vars });
    const total = searchMode ? ((data || {})[key] || {})['count'] || 0 : undefined;
    const items = ((data || {})[key] || {})['items'] || [];
    const nextCursor = ((data || {})[key] || {})['cursor'];
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
        }),
        [items, loading, nextCursor, switchDefaultValues, handleSwitchChange, displayPage],
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
