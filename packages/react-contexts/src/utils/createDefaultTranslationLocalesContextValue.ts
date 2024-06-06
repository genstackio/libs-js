import { translation_locales_context_value } from '../types';

export const createDefaultTranslationLocalesContextValue = (
    defaultValue: translation_locales_context_value | undefined = undefined,
): translation_locales_context_value =>
    defaultValue || {
        locales: [],
        getFlagIconUrl: (locale: string) => undefined,
        getItem: async (type: string, id: string | undefined, key: string, options?: Record<string, unknown>) => {
            return {};
        },
        saveItem: async (
            type: string,
            id: string | undefined,
            key: string,
            data: Record<string, unknown>,
            options?: Record<string, unknown>,
        ) => {
            // ignore
        },
    };

export default createDefaultTranslationLocalesContextValue;
