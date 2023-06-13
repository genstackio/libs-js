import buildListRouteUri from './buildListRouteUri';
import { next_page_ctx } from '../types';

export function buildNextPageActionForPageMode(
    nextPage,
    {
        name,
        filterName,
        cursor,
        nextCursor,
        pageIndex,
        pageSize,
        pagePreviousCursors,
        searchMode,
        listRoute,
    }: next_page_ctx,
) {
    nextPage === undefined && (nextPage = pageIndex + 1);

    if (nextPage === 0)
        return {
            type: 'history_push',
            config: {
                uri: buildListRouteUri(listRoute, {
                    name,
                    filterName,
                    pPage: String(1),
                    pSize: String(pageSize || 10),
                    pMode: searchMode ? 'search' : 'default',
                    pCursors: '',
                }),
            },
        };

    if (nextPage > pageIndex)
        return {
            type: 'history_push',
            config: {
                uri: buildListRouteUri(listRoute, {
                    name,
                    filterName,
                    pPage: String(nextPage + 1),
                    pSize: String(pageSize || 10),
                    pMode: searchMode ? 'search' : 'default',
                    pCursors: [...((pagePreviousCursors as unknown as any) || []), cursor, nextCursor].join(':'),
                }),
            },
        };

    if (nextPage < pageIndex)
        return {
            type: 'history_push',
            config: {
                uri: buildListRouteUri(listRoute, {
                    name,
                    filterName,
                    pPage: String(nextPage + 1),
                    pSize: String(pageSize || 10),
                    pMode: searchMode ? 'search' : 'default',
                    pCursors: [...(pagePreviousCursors.slice(0, -1) || []), pagePreviousCursors.slice(-1)[0]].join(':'),
                }),
            },
        };

    return undefined;
}
export default buildNextPageActionForPageMode;
