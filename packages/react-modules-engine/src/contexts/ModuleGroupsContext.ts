import { createContext } from 'react';
import { module_groups_context_value } from '../types';
import createDefaultModuleGroupsContextValue from '../utils/createDefaultModuleGroupsContextValue';

export const ModuleGroupsContext = createContext<module_groups_context_value>(createDefaultModuleGroupsContextValue());
export const ModuleGroupsContextProvider = ModuleGroupsContext.Provider;
export const ModuleGroupsContextConsumer = ModuleGroupsContext.Consumer;

export default ModuleGroupsContext;
