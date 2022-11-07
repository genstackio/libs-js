import {gh_context_handler, gh_context_provider, gh_request_context} from "../types";

// noinspection JSUnusedLocalSymbols
function provider(handler: Function, config: any = {}): {handler: gh_context_handler, provider: gh_context_provider} {
    // noinspection JSUnusedLocalSymbols
    return {
        handler,
        provider: {
            error: async (e: Error, rctx: gh_request_context) => {
                console.error(JSON.stringify(e, null, 4));
            },
            captureMessage: async (message: string, options?: any) => {
                console.log('message', message);
            },
            captureMessages: async (messages: string[], options?: any) => {
                messages.forEach(message => {
                    console.log('message', message);
                });
            },
            captureData: async (type: string, data?: any, options?: any) => {
                console.log('data', type, JSON.stringify(data, null, 4));
            },
            captureBulkData: async (bulkData?: any, options?: any) => {
                Object.entries(bulkData || {}).forEach(([type, data]) => {
                    console.log('data', type, JSON.stringify(data, null, 4));
                });
            },
            captureEvent: async (event: any, options?: any) => {
                console.log('event', JSON.stringify(event, null, 4));
            },
            captureTag: async (tag: string, value?: any, options?: any) => {
                console.log('tag', tag, JSON.stringify(value, null, 4));
            },
            captureTags: async (tags: any, options?: any) => {
                Object.entries(tags || {}).forEach(([tag, value]) => {
                    console.log('tag', tag, JSON.stringify(value, null, 4));
                });
            },
            captureUser: async (user: any, options?: any) => {
                console.log('user', JSON.stringify(user, null, 4));
            },
        },

    };
}
export default provider;
