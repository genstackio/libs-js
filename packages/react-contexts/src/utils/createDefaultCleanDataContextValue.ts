import {clean_data_context_value} from "../types";

export function createDefaultCleanDataContextValue(): clean_data_context_value {
    // noinspection JSUnusedLocalSymbols
    return (data: any, keptKeys: any[], createMode = false) => data;
}

export default createDefaultCleanDataContextValue;
