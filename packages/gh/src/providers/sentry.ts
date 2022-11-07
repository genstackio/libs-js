import {gh_context_provider} from "../types";

export default (config: any = {}): gh_context_provider => {
    if (!!process.env.AWS_LAMBDA_FUNCTION_NAME || (config?.config?.mode === 'lambda')) return require('./sentry-lambda').default(config);
    return require('./sentry-node').default(config);
};
