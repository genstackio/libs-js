import { page_mode_ctx } from '../types';
import buildPageModeActionForPageMode from './buildPageModeActionForPageMode';
import buildPageModeActionForStateMode from './buildPageModeActionForStateMode';

export function buildPageModeActions(searchMode, ctx: page_mode_ctx) {
    const actions: any[] = [];

    'page' === ctx.navigationMode && actions.push(buildPageModeActionForPageMode(searchMode, ctx));
    'state' === ctx.navigationMode && actions.push(buildPageModeActionForStateMode(searchMode, ctx));

    return actions.filter((x) => !!x);
}

// noinspection JSUnusedGlobalSymbols
export default buildPageModeActions;
