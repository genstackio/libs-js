import {gh_context_handler, gh_context_provider, gh_request_context} from "../types";

// noinspection JSUnusedLocalSymbols
function provider(handler: Function, config: any = {}): {handler: gh_context_handler, provider: gh_context_provider} {
    // noinspection JSUnusedLocalSymbols
    return {
        handler,
        provider: {
            error: async (e: Error, rctx: gh_request_context) => {
            },
            captureMessage: async (message: string, options?: any) => {
            },
            captureMessages: async (messages: string[], options?: any) => {
            },
            captureData: async (type: string, data?: any, options?: any) => {
            },
            captureBulkData: async (bulkData?: any, options?: any) => {
            },
            captureEvent: async (event: any, options?: any) => {
            },
            captureTag: async (tag: string, value?: any, options?: any) => {
            },
            captureTags: async (tags: any, options?: any) => {
            },
            captureUser: async (user: any, options?: any) => {
            },
        },

    };
}
export default provider;
