import Sentry from "@sentry/node";
import {gh_context_provider} from "../types";

export default (config: any = {}): gh_context_provider => {
    Sentry.init({
        dsn: config.dsn || process.env.SENTRY_DSN,
        tracesSampleRate: config.tracesSampleRate || process.env.SENTRY_TRACES_SAMPLE_RATE || 1.0,
    });
    // noinspection JSUnusedLocalSymbols
    return {
        wrap: (handler: Function, mode?: string) => handler,
        error: async (e: Error, ...args: any[]) => {
            Sentry.captureException(e);
        },
        captureError: async (e: Error, options?: any) => {
            Sentry.captureException(e);
        },
        captureMessage: async (message: string, options?: any) => {
            Sentry.captureMessage(message);
        },
        captureMessages: async (messages: string[], options?: any) => {
            messages.forEach(message => {
                Sentry.captureMessage(message);
            });
        },
        captureData: async (type: string, data?: any, options?: any) => {
            Sentry.setExtra(type, data);
        },
        captureBulkData: async (data?: any, options?: any) => {
            Sentry.setExtras(data);
        },
        captureEvent: async (event: any, options?: any) => {
            Sentry.captureEvent(event);
        },
        captureTag: async (tag: string, value?: any, options?: any) => {
            Sentry.setTag(tag, value);
        },
        captureTags: async (tags: any, options?: any) => {
            Sentry.setTags(tags);
        },
        captureUser: async (user: any, options?: any) => {
            Sentry.setUser(user);
        },
    };
};
