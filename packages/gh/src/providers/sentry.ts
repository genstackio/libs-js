import Sentry from "@sentry/serverless";
import {gh_context_handler, gh_context_provider, gh_request_context} from "../types";

function provider(handler: Function, config: any = {}): {handler: gh_context_handler, provider: gh_context_provider} {
    Sentry.AWSLambda.init({
        dsn: config.dsn || process.env.SENTRY_DSN,
        tracesSampleRate: config.tracesSampleRate || process.env.SENTRY_TRACES_SAMPLE_RATE || 1.0,
    });
    // noinspection JSUnusedLocalSymbols
    return {
        handler: Sentry.AWSLambda.wrapHandler<any, any>(handler as (event: any, context: any) => Promise<any>, {
            captureTimeoutWarning: !!config.captureTimeoutWarning || !!process.env.SENTRY_CAPTURE_TIMEOUT_WARNING || false,
            captureAllSettledReasons: !!config.captureAllSettledReasons || !!process.env.SENTRY_CAPTURE_ALL_SETTLED_REASONS || false,
        }),
        provider: {
            error: async (e: Error, rctx: gh_request_context) => {
                Sentry.AWSLambda.captureException(e);
            },
            captureMessage: async (message: string, options?: any) => {
                Sentry.AWSLambda.captureMessage(message);
            },
            captureMessages: async (messages: string[], options?: any) => {
                messages.forEach(message => {
                    Sentry.AWSLambda.captureMessage(message);
                });
            },
            captureData: async (type: string, data?: any, options?: any) => {
                Sentry.AWSLambda.setExtra(type, data);
            },
            captureBulkData: async (data?: any, options?: any) => {
                Sentry.AWSLambda.setExtras(data);
            },
            captureEvent: async (event: any, options?: any) => {
                Sentry.AWSLambda.captureEvent(event);
            },
            captureTag: async (tag: string, value?: any, options?: any) => {
                Sentry.AWSLambda.setTag(tag, value);
            },
            captureTags: async (tags: any, options?: any) => {
                Sentry.AWSLambda.setTags(tags);
            },
            captureUser: async (user: any, options?: any) => {
                Sentry.AWSLambda.setUser(user);
            },
        },
    };
}
export default provider;
