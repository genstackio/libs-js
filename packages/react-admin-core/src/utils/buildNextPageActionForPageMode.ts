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
    const pSize = String(pageSize);
    const pPage = String(nextPage + 1);
    const pMode = !!searchMode ? 'search' : 'default';
    const common = { name, filterName, pPage, pSize, pMode };

    if (nextPage === 0)
        return {
            type: 'history_push',
            config: {
                uri: buildListRouteUri(listRoute, {
                    ...common,
                    pCursors: '',
                }),
            },
        };

    if (nextPage > pageIndex)
        return {
            type: 'history_push',
            config: {
                uri: buildListRouteUri(listRoute, {
                    ...common,
                    pCursors: [...pagePreviousCursors, cursor, nextCursor].join(':'),
                }),
            },
        };

    if (nextPage < pageIndex)
        return {
            type: 'history_push',
            config: {
                uri: buildListRouteUri(listRoute, {
                    ...common,
                    pCursors: [...pagePreviousCursors.slice(0, -1), pagePreviousCursors.slice(-1)[0]].join(':'),
                }),
            },
        };

    return undefined;
}
export default buildNextPageActionForPageMode;
