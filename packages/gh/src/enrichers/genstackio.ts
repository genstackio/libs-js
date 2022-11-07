// noinspection JSUnusedLocalSymbols
export default (options?: any) => {
    const cc: any = {tags: {}, environment: undefined};
    if (process.env.AWS_LAMBDA_FUNCTION_NAME) {
        const iof = process.env.AWS_LAMBDA_FUNCTION_NAME.indexOf('-');
        if (iof >= 0) {
            const prefix = process.env.AWS_LAMBDA_FUNCTION_NAME.slice(0, iof);
            const suffix = process.env.AWS_LAMBDA_FUNCTION_NAME.slice(iof + 1);
            if (['dev', 'test', 'prepod', 'prod', 'qa', 'demo', 'sandbox'].includes(prefix)) {
                cc.environment = prefix;
                cc.tags['env'] = prefix;
                cc.tags['project_name'] = suffix;
            }
        }
    }
    (process.env.CORE_SDK_ENV) && (cc.tags['core_sdk_env'] = process.env.CORE_SDK_ENV);
    (process.env.SEARCH_SDK_ENV) && (cc.tags['search_sdk_env'] = process.env.SEARCH_SDK_ENV);
    (process.env.PLATFORM_ENV) && (cc.tags['platform_env'] = process.env.PLATFORM_ENV);

    return cc;
}
