import { next_page_ctx } from '../types';
import buildNextPageActionForPageMode from './buildNextPageActionForPageMode';
import buildNextPageActionForStateMode from './buildNextPageActionForStateMode';

export function buildNextPageActions(nextPage, ctx: next_page_ctx) {
    nextPage === undefined && (nextPage = 1);
    const actions: any[] = [];
    'page' === ctx.navigationMode && actions.push(buildNextPageActionForPageMode(nextPage, ctx));
    actions.push(buildNextPageActionForStateMode(nextPage, ctx));
    return actions.filter((x) => !!x);
}

// noinspection JSUnusedGlobalSymbols
export default buildNextPageActions;
