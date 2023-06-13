import { page_mode_ctx } from '../types';

export function buildPageModeActionForStateMode(searchMode, { pageSize }: page_mode_ctx) {
    return {
        type: 'page_state_and_mode',
        config: {
            state: {
                size: pageSize,
                index: 0,
                previousCursors: [],
                currentCursor: '',
            },
            searchMode,
        },
    };
}

export default buildPageModeActionForStateMode;
