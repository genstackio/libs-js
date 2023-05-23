import { createContext } from 'react';
import { module_layouts_context_value } from '../types';
import createDefaultModuleLayoutsContextValue from '../utils/createDefaultModuleLayoutsContextValue';

export const ModuleLayoutsContext = createContext<module_layouts_context_value>(
    createDefaultModuleLayoutsContextValue(),
);
export const ModuleLayoutsContextProvider = ModuleLayoutsContext.Provider;
export const ModuleLayoutsContextConsumer = ModuleLayoutsContext.Consumer;

export default ModuleLayoutsContext;
