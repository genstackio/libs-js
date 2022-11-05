import Sentry from "@sentry/serverless";
import {gh_context} from "..";

function provider(handler: Function, config: any = {}): gh_context {
    Sentry.AWSLambda.init({
        dsn: config.dsn || process.env.SENTRY_DSN,
        tracesSampleRate: config.tracesSampleRate || process.env.SENTRY_TRACES_SAMPLE_RATE || 1.0,
    });
    return {
        handler: Sentry.AWSLambda.wrapHandler<any, any>(handler as (event: any, context: any) => Promise<any>, {
            captureTimeoutWarning: !!config.captureTimeoutWarning || !!process.env.SENTRY_CAPTURE_TIMEOUT_WARNING || false,
            captureAllSettledReasons: !!config.captureAllSettledReasons || !!process.env.SENTRY_CAPTURE_ALL_SETTLED_REASONS || false,
        }),
    };
}
export default provider;
