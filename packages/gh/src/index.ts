export type gh_options = {
    silentError?: boolean;
    provider?: string;
    config?: any;
};

export type gh_context = {
    handler: any;
};

export type gh_request_context = {
    event: any;
    context: any;
    handler: any;
    result?: any;
    error?: any
};

const defaultProvider = process.env.GH_PROVIDER || 'none';

export function gh(handler: Function, options: gh_options = {}): (event: any, context: any) => Promise<any> {
    const ctx = init(handler, options);
    return async function(event: any, context: any) {
        const rctx = await start(ctx, event, context)
        try {
            const r = await handle(rctx);
            try {
                await report(rctx, r);
            } catch (e: any) {
                await error(rctx, e);
            }
            return r;
        } catch (e: any) {
            await error(rctx, e);
            if (!options.silentError) throw e;
        }
    }
}

function init(handler: Function, options: gh_options): gh_context {
    try {
        return require(`${__dirname}/providers/${options.provider || defaultProvider}`).default(handler, options.config);
    } catch (e: any) {
        throw new Error(`Unable to load gh provider '${options.provider || defaultProvider}': ${e.message}`);
    }
}

// this function is called right before the wrapped handler
async function start(ctx: gh_context, event: any, context: any): Promise<gh_request_context> {
    const rctx: gh_request_context = ctx as gh_request_context;
    rctx.event = event;
    rctx.context = context;
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
    console.error(JSON.stringify(rctx, null, 4));
}

export default gh;
