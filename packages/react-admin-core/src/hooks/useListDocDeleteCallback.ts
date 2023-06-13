import { useCallback } from 'react';

export function useListDocDeleteCallback({
    deleteDoc,
    setPage,
    pageSize,
    pageIndex,
    pagePreviousCursors,
    pageCurrentCursor,
    fetchSortVariables,
    refetch,
}: {
    deleteDoc: Function;
    setPage: Function;
    pageSize: number;
    pageIndex: number;
    pagePreviousCursors: string[];
    pageCurrentCursor: string;
    fetchSortVariables: any;
    refetch: Function;
}) {
    return useCallback(
        (id) => {
            deleteDoc({ variables: { id } });
            setPage({
                size: pageSize,
                index: pageIndex,
                previousCursors: pagePreviousCursors,
                currentCursor: pageCurrentCursor,
            });
            refetch({ variables: { offset: pageCurrentCursor, limit: pageSize, ...fetchSortVariables } });
        },
        [fetchSortVariables, deleteDoc, setPage, pageSize, pageIndex, pagePreviousCursors, pageCurrentCursor, refetch],
    );
}

export default useListDocDeleteCallback;
