import { createContext } from 'react';
import { module_context_value } from '../types';
import createDefaultModuleContextValue from '../utils/createDefaultModuleContextValue';

export const ModuleContext = createContext<module_context_value>(createDefaultModuleContextValue());
export const ModuleContextProvider = ModuleContext.Provider;
export const ModuleContextConsumer = ModuleContext.Consumer;

export default ModuleContext;
