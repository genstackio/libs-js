import { useContext } from 'react';
import ModuleAliasesContext from '../contexts/ModuleAliasesContext';

export function useModuleAliasesContext() {
    return useContext(ModuleAliasesContext);
}

export default useModuleAliasesContext;
