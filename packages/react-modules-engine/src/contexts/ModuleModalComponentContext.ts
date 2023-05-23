import { createContext } from 'react';
import { module_modal_component_context_value } from '../types';
import createDefaultModuleModalComponentContextValue from '../utils/createDefaultModuleModalComponentContextValue';

export const ModuleModalComponentContext = createContext<module_modal_component_context_value>(
    createDefaultModuleModalComponentContextValue(),
);
export const ModuleModalComponentContextProvider = ModuleModalComponentContext.Provider;
export const ModuleModalComponentContextConsumer = ModuleModalComponentContext.Consumer;

export default ModuleModalComponentContext;
