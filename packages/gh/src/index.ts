import {gh_context, gh_options, gh_request_context} from "./types";

const defaultProvider = process.env.GH_PROVIDER || 'console';
const defaultLogger = process.env.GH_LOGGER || 'console';

export function gh(handler: Function, options: gh_options = {}): (event: any, context: any) => Promise<any> {
    const ctx = init(handler, options);
    return async function(event: any, context: any) {
        const rctx = await start(ctx, event, context)
        try {
            const r = await handle(rctx);
            await report(rctx, r);
            return r;
        } catch (e: any) {
            await error(rctx, e);
            if (!options.silentError) throw e;
        }
    }
}

function init(handler: Function, options: gh_options): gh_context {
    let providerCtx: any;
    let loggerCtx: any;
    try {
        providerCtx = require(`${__dirname}/providers/${options.provider || defaultProvider}`).default(handler, options.config);
    } catch (e: any) {
        throw new Error(`Unable to load gh provider '${options.provider || defaultProvider}': ${e.message}`);
    }
    try {
        loggerCtx = require(`${__dirname}/loggers/${options.logger || defaultLogger}`).default(handler, options.config);
    } catch (e: any) {
        throw new Error(`Unable to load gh logger '${options.logger || defaultLogger}': ${e.message}`);
    }

    return {...providerCtx, ...loggerCtx} as gh_context;
}

// this function is called right before the wrapped handler
async function start(ctx: gh_context, event: any, context: any): Promise<gh_request_context> {
    const rctx: gh_request_context = ctx as gh_request_context;
    rctx.event = event;
    rctx.context = context;
    Object.assign(rctx.context, {logger: rctx.logger})
    Object.assign(rctx.context, createCaptures(rctx))
    return rctx;
}

// this function is calling the wrapped handler
async function handle(rctx: gh_request_context) {
    return rctx.handler(rctx.event, rctx.context);
}

// this function is called right after the wrapped handler
async function report(rctx: gh_request_context, result: any) {
    rctx.result = result;
}

async function error(rctx: gh_request_context, e: any) {
    rctx.error = e;
    const reports = await Promise.allSettled([
        rctx.provider.error(e, rctx),
        rctx.logger.error(e),
    ]);
    reports.filter(x => x.status !== 'fulfilled').forEach((r: any) => {
        console.error(JSON.stringify(r?.reason, null, 4));
    });
}

function createCaptures(rctx: gh_request_context) {
    return {
        captureData: rctx.provider.captureData,
        captureBulkData: rctx.provider.captureBulkData,
        captureMessage: rctx.provider.captureMessage,
        captureMessages: rctx.provider.captureMessages,
        captureEvent: rctx.provider.captureEvent,
        captureTag: rctx.provider.captureTag,
        captureTags: rctx.provider.captureTags,
        captureUser: rctx.provider.captureUser,
    }
}
export default gh;
