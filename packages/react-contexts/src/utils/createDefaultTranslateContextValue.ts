import { translate_context_value } from '../types';

export const createDefaultTranslateContextValue = (
    defaultValue: translate_context_value | undefined = undefined,
): translate_context_value =>
    defaultValue || {
        translateItem: async (_: string, text: string, sourceLocale: string, targetLocale: string): Promise<unknown> => {
            return Promise.resolve(undefined);
        },
        referenceLocale: 'en_US',
    };

export default createDefaultTranslateContextValue;
