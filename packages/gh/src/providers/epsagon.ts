import epsagon from 'epsagon';
import {gh_context_provider} from "../types";

export default (config: any = {}): gh_context_provider => {
    let messageId: number = 1;
    let eventId: number = 1;
    epsagon.init({
        token: config.token || process.env.EPSAGON_TOKEN,
        appName: config.appName || process.env.EPSAGON_APP_NAME || process.env.AWS_LAMBDA_FUNCTION_NAME || 'unnamed-lambda',
        metadataOnly: ('undefined' !== typeof config.metadataOnly) ? config.metadataOnly : false,
    });
    // noinspection JSUnusedLocalSymbols
    return ({
        wrap: (handler: Function, mode?: string) => {
            switch (mode) {
                case 'node':
                    return epsagon.nodeWrapper(handler);
                case 'gcloudfunc':
                    return epsagon.googleCloudFunctionWrapper(handler);
                default:
                case 'lambda':
                    return epsagon.lambdaWrapper(handler);
            }
        },
        error: async (e: Error, ...args: any[]) => {
            epsagon.setError(e);
        },
        captureError: async (e: Error, options?: any) => {
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
    });
};
