import { page_resized_ctx } from '../types';

export function buildPageResizedActionForStateMode(newPageSize, {}: page_resized_ctx) {
    return {
        type: 'page_state',
        config: {
            state: {
                size: newPageSize,
                index: 0,
                previousCursors: [],
                currentCursor: '',
            },
        },
    };
}

export default buildPageResizedActionForStateMode;
