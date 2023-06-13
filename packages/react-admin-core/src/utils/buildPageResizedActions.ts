import { page_resized_ctx } from '../types';
import buildPageResizedActionForPageMode from './buildPageResizedActionForPageMode';
import buildPageResizedActionForStateMode from './buildPageResizedActionForStateMode';

const defaultPageSize = 10;

export function buildPageResizedActions(newPageSize, ctx: page_resized_ctx) {
    !newPageSize && (newPageSize = defaultPageSize);

    const actions: any[] = [];

    'page' === ctx.navigationMode && actions.push(buildPageResizedActionForPageMode(newPageSize, ctx));
    'state' === ctx.navigationMode && actions.push(buildPageResizedActionForStateMode(newPageSize, ctx));

    return actions.filter((x) => !!x);
}

// noinspection JSUnusedGlobalSymbols
export default buildPageResizedActions;
