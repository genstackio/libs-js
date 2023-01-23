import { useCallback } from 'react';

export function useListDocDeleteCallback({
    deleteDoc,
    setPage,
    page,
    fetchSortVariables,
    refetch,
}: {
    deleteDoc: Function;
    setPage: Function;
    page: any;
    fetchSortVariables: any;
    refetch: Function;
}) {
    return useCallback(
        (id) => () => {
            deleteDoc({ variables: { id } });
            setPage({
                size: page.size,
                index: page.index,
                previousCursors: page.previousCursors,
                currentCursor: page.currentCursor,
            });
            refetch({ variables: { offset: page.currentCursor, limit: page.size, ...fetchSortVariables } });
        },
        [
            fetchSortVariables,
            deleteDoc,
            setPage,
            page.size,
            page.index,
            page.previousCursors,
            page.currentCursor,
            refetch,
        ],
    );
}

export default useListDocDeleteCallback;
