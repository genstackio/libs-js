import { createContext } from 'react';
import { templates_context_value } from '../types';
import createDefaultTemplatesContextValue from '../utils/createDefaultTemplatesContextValue';

export const TemplatesContext = createContext<templates_context_value>(createDefaultTemplatesContextValue());
export const TemplatesContextProvider = TemplatesContext.Provider;
export const TemplatesContextConsumer = TemplatesContext.Consumer;

export default TemplatesContext;
