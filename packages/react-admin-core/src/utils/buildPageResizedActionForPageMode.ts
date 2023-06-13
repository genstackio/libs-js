import buildListRouteUri from './buildListRouteUri';
import { page_resized_ctx } from '../types';

export function buildPageResizedActionForPageMode(
    newPageSize,
    { name, filterName, searchMode, listRoute }: page_resized_ctx,
) {
    const pSize = String(newPageSize);
    const pPage = String(1);
    const pMode = !!searchMode ? 'search' : 'default';
    const common = { name, filterName, pPage, pSize, pMode };

    return {
        type: 'history_push',
        config: {
            uri: buildListRouteUri(listRoute, {
                ...common,
                pCursors: '',
            }),
        },
    };
}
export default buildPageResizedActionForPageMode;
