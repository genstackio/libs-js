import {gh_context} from "../index";

// noinspection JSUnusedLocalSymbols
function provider(handler: Function, config: any = {}): gh_context {
    return {
        handler,
    };
}
export default provider;
