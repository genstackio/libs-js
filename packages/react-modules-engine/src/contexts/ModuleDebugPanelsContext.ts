import { createContext } from 'react';
import { module_debug_panels_context_value } from '../types';
import createDefaultModuleDebugPanelsContextValue from '../utils/createDefaultModuleDebugPanelsContextValue';

export const ModuleDebugPanelsContext = createContext<module_debug_panels_context_value>(
    createDefaultModuleDebugPanelsContextValue(),
);
export const ModuleDebugPanelsContextProvider = ModuleDebugPanelsContext.Provider;
export const ModuleDebugPanelsContextConsumer = ModuleDebugPanelsContext.Consumer;

export default ModuleDebugPanelsContext;
