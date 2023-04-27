import { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import buildListRouteUri from '../utils/buildListRouteUri';

export function useListPageChangeCallback({
    name,
    listRoute,
    navigationMode,
    page,
    setPage,
    cursor,
    nextCursor,
    searchMode,
    filterName,
}: {
    name: string;
    filterName?: string;
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
            console.log(navigationMode, page, nextPage, listRoute, name, searchMode);
            if ('page' === navigationMode) {
                let u = '';
                if (nextPage === 0) {
                    u = buildListRouteUri(listRoute, {
                        name,
                        filterName,
                        pPage: String(page.index),
                        pSize: String(page.size),
                        pMode: searchMode ? 'search' : 'default',
                        pCursors: '',
                    });
                } else if (nextPage > page.index) {
                    u = buildListRouteUri(listRoute, {
                        name,
                        filterName,
                        pPage: String(nextPage + 1),
                        pSize: String(page.size),
                        pMode: searchMode ? 'search' : 'default',
                        pCursors: [...((page.previousCursors as unknown as any) || []), cursor, nextCursor].join(':'),
                    });
                } else if (nextPage < page.index) {
                    u = buildListRouteUri(listRoute, {
                        name,
                        filterName,
                        pPage: String(nextPage + 1),
                        pSize: String(page.size),
                        pMode: searchMode ? 'search' : 'default',
                        pCursors: [
                            ...(page.previousCursors.slice(0, -1) || []),
                            page.previousCursors.slice(-1)[0],
                        ].join(':'),
                    });
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
            filterName,
        ],
    );
}

export default useListPageChangeCallback;
