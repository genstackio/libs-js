import {gh_capture_context_object} from "../types";

// noinspection JSUnusedLocalSymbols
export default (captureContext: gh_capture_context_object, options?: any) => {
    captureContext.tags = captureContext.tags || {};
    if (process.env.AWS_LAMBDA_FUNCTION_NAME) {
        const iof = process.env.AWS_LAMBDA_FUNCTION_NAME.indexOf('-');
        if (iof >= 0) {
            const prefix = process.env.AWS_LAMBDA_FUNCTION_NAME.slice(0, iof);
            const suffix = process.env.AWS_LAMBDA_FUNCTION_NAME.slice(iof + 1);
            if (['dev', 'test', 'prepod', 'prod', 'qa', 'demo', 'sandbox'].includes(prefix)) {
                captureContext.tags['environment'] = prefix;
                captureContext.tags['project_name'] = suffix;
            }
        }
    }
    (process.env.CORE_SDK_ENV) && (captureContext.tags['core_sdk_env'] = process.env.CORE_SDK_ENV);
    (process.env.SEARCH_SDK_ENV) && (captureContext.tags['search_sdk_env'] = process.env.SEARCH_SDK_ENV);
    (process.env.PLATFORM_ENV) && (captureContext.tags['platform_env'] = process.env.PLATFORM_ENV);
    if (!Object.keys(captureContext.tags).length) delete captureContext.tags;
}
