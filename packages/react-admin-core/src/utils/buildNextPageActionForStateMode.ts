import { next_page_ctx } from '../types';

export function buildNextPageActionForStateMode(
    nextPage,
    { pageIndex, pageSize, pagePreviousCursors, nextCursor, cursor }: next_page_ctx,
) {
    if (nextPage > pageIndex)
        return {
            type: 'page_state',
            config: {
                state: {
                    size: pageSize,
                    index: nextPage,
                    previousCursors: [...((pagePreviousCursors as unknown as any) || []), cursor],
                    currentCursor: nextCursor,
                },
            },
        };

    if (nextPage < pageIndex)
        return {
            type: 'page_state',
            config: {
                state: {
                    size: pageSize,
                    index: nextPage,
                    previousCursors: pagePreviousCursors.slice(0, -1),
                    currentCursor: pagePreviousCursors.slice(-1)[0],
                },
            },
        };

    return undefined;
}

export default buildNextPageActionForStateMode;
