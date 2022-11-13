import * as Sentry from "@sentry/serverless";
import {gh_context_provider} from "@genstackio/gh/lib/types";
import createSentryProvider from "./utils/createSentryProvider";

export default (config: any = {}): gh_context_provider => createSentryProvider(Sentry.AWSLambda, config, {
    wrap: (handler: Function, mode?: string) => Sentry.AWSLambda.wrapHandler<any, any>(handler as (event: any, context: any) => Promise<any>, {
        captureTimeoutWarning: !!config.captureTimeoutWarning || !!process.env.SENTRY_CAPTURE_TIMEOUT_WARNING || false,
        captureAllSettledReasons: !!config.captureAllSettledReasons || !!process.env.SENTRY_CAPTURE_ALL_SETTLED_REASONS || false,
    }),
});
