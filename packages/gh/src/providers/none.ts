import {gh_context_provider} from "../types";

// noinspection JSUnusedLocalSymbols
export default (config: any = {}): gh_context_provider => ({
    wrap: (handler: Function, mode?: string) => handler,
    error: async (e: Error, ...args: any[]) => {
    },
    captureError: async (e: Error, options?: any) => {
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
});
