import { useCallback } from 'react';
import { useHistory } from 'react-router-dom';

export function useListPageChangeCallback({
    name,
    listRoute,
    navigationMode,
    page,
    setPage,
    cursor,
    nextCursor,
    searchMode,
}: {
    name: string;
    listRoute: string;
    navigationMode: string;
    page: any;
    setPage: Function;
    cursor?: string;
    nextCursor?: string;
    searchMode: boolean;
}) {
    const history = useHistory();

    return useCallback(
        ({ page: nextPage }) => {
            if ('page' === navigationMode) {
                let u = '';
                if (nextPage === 0) {
                    u = listRoute
                        .replace('{name}', name)
                        .replace('{pPage}', String(page.index))
                        .replace('{pSize}', String(page.size))
                        .replace('{pMode}', searchMode ? 'search' : 'default')
                        .replace('{pCursors}', '');
                } else if (nextPage > page.index) {
                    u = listRoute
                        .replace('{name}', name)
                        .replace('{pPage}', nextPage + 1)
                        .replace('{pSize}', String(page.size))
                        .replace('{pMode}', searchMode ? 'search' : 'default')
                        .replace(
                            '{pCursors}',
                            [...((page.previousCursors as unknown as any) || []), cursor, nextCursor].join(':'),
                        );
                } else if (nextPage < page.index) {
                    u = listRoute
                        .replace('{name}', name)
                        .replace('{pPage}', nextPage + 1)
                        .replace('{pSize}', String(page.size))
                        .replace('{pMode}', searchMode ? 'search' : 'default')
                        .replace(
                            '{pCursors}',
                            [...(page.previousCursors.slice(0, -1) || []), page.previousCursors.slice(-1)[0]].join(':'),
                        );
                }
                u && history.push(u);
                return;
            }
            if (nextPage > page.index) {
                setPage({
                    size: page.size,
                    index: nextPage,
                    previousCursors: [...((page.previousCursors as unknown as any) || []), cursor],
                    currentCursor: nextCursor,
                });
            } else if (nextPage < page.index) {
                setPage({
                    size: page.size,
                    index: nextPage,
                    previousCursors: page.previousCursors.slice(0, -1),
                    currentCursor: page.previousCursors.slice(-1)[0],
                });
            }
        },
        [
            searchMode,
            navigationMode,
            history,
            listRoute,
            name,
            page.size,
            cursor,
            nextCursor,
            setPage,
            page.previousCursors,
            page.index,
        ],
    );
}

export default useListPageChangeCallback;
