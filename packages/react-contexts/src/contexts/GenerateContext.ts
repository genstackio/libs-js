import { createContext } from 'react';
import { generate_context_value } from '../types';
import createDefaultGenerateContextValue from '../utils/createDefaultGenerateContextValue';

export const GenerateContext = createContext<generate_context_value>(createDefaultGenerateContextValue());
export const GenerateContextProvider = GenerateContext.Provider;
export const GenerateContextConsumer = GenerateContext.Consumer;

export default GenerateContext;
