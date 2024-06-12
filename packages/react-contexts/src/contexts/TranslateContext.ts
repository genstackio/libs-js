import { createContext } from 'react';
import { translate_context_value } from '../types';
import createDefaultTranslateContextValue from '../utils/createDefaultTranslateContextValue';

export const TranslateContext = createContext<translate_context_value>(createDefaultTranslateContextValue());
export const TranslateContextProvider = TranslateContext.Provider;
export const TranslateContextConsumer = TranslateContext.Consumer;

export default TranslateContext;
