import { module_groups_context_value } from '../types';

export function createDefaultModuleGroupsContextValue(): module_groups_context_value {
    return { debug: false };
}

export default createDefaultModuleGroupsContextValue;
