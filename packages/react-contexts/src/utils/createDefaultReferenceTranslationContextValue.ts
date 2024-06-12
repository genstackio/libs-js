import { reference_translation_context_value } from '../types';

export const createDefaultTranslateContextValue = (
    defaultValue: reference_translation_context_value | undefined = undefined,
): reference_translation_context_value =>
    defaultValue || {
        referenceLocale: 'en_US',
        referenceValue: undefined,
    };

export default createDefaultTranslateContextValue;
