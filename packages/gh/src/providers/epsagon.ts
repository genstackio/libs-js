import epsagon from 'epsagon';
import {gh_context} from "../index";

function provider(handler: Function, config: any = {}): gh_context {
    epsagon.init({
        token: config.token || process.env.EPSAGON_TOKEN,
        appName: config.appName || process.env.EPSAGON_APP_NAME || process.env.AWS_LAMBDA_FUNCTION_NAME || 'unnamed-lambda',
        metadataOnly: ('undefined' !== typeof config.metadataOnly) ? config.metadataOnly : false,
    });
    return {
        handler: epsagon.lambdaWrapper(handler),
    };
}
export default provider;
