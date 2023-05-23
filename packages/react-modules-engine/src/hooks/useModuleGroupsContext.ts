import { useContext } from 'react';
import ModuleGroupsContext from '../contexts/ModuleGroupsContext';

export function useModuleGroupsContext() {
    return useContext(ModuleGroupsContext);
}

export default useModuleGroupsContext;
