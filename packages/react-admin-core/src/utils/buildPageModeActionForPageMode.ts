import buildListRouteUri from './buildListRouteUri';
import { page_mode_ctx } from '../types';

export function buildPageModeActionForPageMode(searchMode, { name, filterName, pageSize, listRoute }: page_mode_ctx) {
    const pSize = String(pageSize);
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
export default buildPageModeActionForPageMode;
