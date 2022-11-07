import {gh_context_provider} from "../types";

// noinspection JSUnusedLocalSymbols
export default (config: any = {}): gh_context_provider => ({
    wrap: (handler: Function, mode?: string) => handler,
    error: async (e: Error, ...args: any[]) => {
        console.error(JSON.stringify(e, null, 4));
    },
    captureError: async (e: Error, options?: any) => {
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
});
