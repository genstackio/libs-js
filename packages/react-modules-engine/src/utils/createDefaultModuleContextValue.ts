import { module_context_value } from '../types';

export function createDefaultModuleContextValue(): module_context_value {
    return {
        paddingMode: 'all',
        type: 'unknown',
        index: 0,
        first: true,
        last: true,
        total: 1,
        middle: false,
        containerProps: {},
        blockProps: { border: false },
    };
}

export default createDefaultModuleContextValue;
