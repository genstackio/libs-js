import {gh_context_provider} from "@genstackio/gh/lib/types";

export default (config: any = {}): gh_context_provider => {
    if (!!process.env.AWS_LAMBDA_FUNCTION_NAME || (config?.mode === 'lambda')) return require('./sentry-lambda').default(config);
    return require('./sentry-node').default(config);
};
