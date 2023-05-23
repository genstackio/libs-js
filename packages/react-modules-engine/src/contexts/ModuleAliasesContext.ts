import { createContext } from 'react';
import { module_aliases_context_value } from '../types';
import createDefaultModuleAliasesContextValue from '../utils/createDefaultModuleAliasesContextValue';

export const ModuleAliasesContext = createContext<module_aliases_context_value>(
    createDefaultModuleAliasesContextValue(),
);
export const ModuleAliasesContextProvider = ModuleAliasesContext.Provider;
export const ModuleAliasesContextConsumer = ModuleAliasesContext.Consumer;

export default ModuleAliasesContext;
