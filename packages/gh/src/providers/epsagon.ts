import epsagon from 'epsagon';
import {gh_context_handler, gh_context_provider, gh_request_context} from "../types";

let messageId: number = 1;
let eventId: number = 1;

function provider(handler: Function, config: any = {}): {handler: gh_context_handler, provider: gh_context_provider} {
    epsagon.init({
        token: config.token || process.env.EPSAGON_TOKEN,
        appName: config.appName || process.env.EPSAGON_APP_NAME || process.env.AWS_LAMBDA_FUNCTION_NAME || 'unnamed-lambda',
        metadataOnly: ('undefined' !== typeof config.metadataOnly) ? config.metadataOnly : false,
    });
    // noinspection JSUnusedLocalSymbols
    return {
        handler: epsagon.lambdaWrapper(handler),
        provider: {
            error: async (e: Error, rctx: gh_request_context) => {
                epsagon.setError(e);
            },
            captureMessage: async (message: string, options?: any) => {
                epsagon.label(`message_${messageId++}`, message);
            },
            captureMessages: async (messages: string[], options?: any) => {
                messages.forEach(message => {
                    epsagon.label(`message_${messageId++}`, message);
                });
            },
            captureData: async (type: string, data?: any, options?: any) => {
                epsagon.label(type, ['number', 'string', 'boolean'].includes(typeof data) ? data : JSON.stringify(data))
            },
            captureBulkData: async (bulkData?: any, options?: any) => {
                Object.entries(bulkData || {}).forEach(([type, data]: [string, any]) => {
                    epsagon.label(type, ['number', 'string', 'boolean'].includes(typeof data) ? data : JSON.stringify(data))
                })
            },
            captureEvent: async (event: any, options?: any) => {
                epsagon.label(`event_${eventId++}`, ['number', 'string', 'boolean', 'undefined'].includes(typeof event) ? event : JSON.stringify(event));
            },
            captureTag: async (tag: string, value?: any, options?: any) => {
                epsagon.label(`tag_${tag}`, ['number', 'string', 'boolean', 'undefined'].includes(typeof value) ? value : JSON.stringify(value));
            },
            captureTags: async (tags: any, options?: any) => {
                Object.entries(tags || {}).forEach(([tag, value]: [string, any]) => {
                    epsagon.label(`tag_${tag}`, ['number', 'string', 'boolean', 'undefined'].includes(typeof value) ? value : JSON.stringify(value));
                })
            },
            captureUser: async (user: any, options?: any) => {
                epsagon.label('user', ['number', 'string', 'boolean', 'undefined'].includes(typeof user) ? user : JSON.stringify(user));
            },
        },
    };
}
export default provider;
