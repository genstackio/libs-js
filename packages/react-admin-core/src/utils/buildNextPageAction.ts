import { next_page_ctx } from '../types';
import buildNextPageActionForPageMode from './buildNextPageActionForPageMode';
import buildNextPageActionForStateMode from './buildNextPageActionForStateMode';

const modes = {
    page: buildNextPageActionForPageMode,
    state: buildNextPageActionForStateMode,
    default: buildNextPageActionForStateMode,
};

export function buildNextPageAction(nextPage, ctx: next_page_ctx) {
    return (modes[ctx.navigationMode || ''] || modes['default'])(nextPage, ctx);
}

// noinspection JSUnusedGlobalSymbols
export default buildNextPageAction;
