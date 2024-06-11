import { generate_context_value } from '../types';

export const createDefaultGenerateContextValue = (
    defaultValue: generate_context_value | undefined = undefined,
): generate_context_value =>
    defaultValue || {
        generateItem: async (name: string) => {
            //ignore
        },
    };

export default createDefaultGenerateContextValue;
