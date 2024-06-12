import { createContext } from 'react';
import { reference_translation_context_value } from '../types';
import createDefaultReferenceTranslationContextValue from '../utils/createDefaultReferenceTranslationContextValue';

export const ReferenceTranslationContext = createContext<reference_translation_context_value>(
    createDefaultReferenceTranslationContextValue(),
);
export const ReferenceTranslationContextProvider = ReferenceTranslationContext.Provider;
export const ReferenceTranslationContextConsumer = ReferenceTranslationContext.Consumer;

export default ReferenceTranslationContext;
