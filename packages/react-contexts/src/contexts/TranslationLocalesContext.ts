import { createContext } from 'react';
import { translation_locales_context_value } from '../types';
import createDefaultTranslationLocalesContextValue from '../utils/createDefaultTranslationLocalesContextValue';

export const TranslationLocalesContext = createContext<translation_locales_context_value>(
    createDefaultTranslationLocalesContextValue(),
);
export const TranslationLocalesContextProvider = TranslationLocalesContext.Provider;
export const TranslationLocalesContextConsumer = TranslationLocalesContext.Consumer;

export default TranslationLocalesContext;
