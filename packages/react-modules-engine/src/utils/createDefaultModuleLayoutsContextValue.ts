import { module_layouts_context_value } from '../types';

export function createDefaultModuleLayoutsContextValue(): module_layouts_context_value {
    return { debug: false };
}

export default createDefaultModuleLayoutsContextValue;
