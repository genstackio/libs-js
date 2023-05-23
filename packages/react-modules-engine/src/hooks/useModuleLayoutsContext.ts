import { useContext } from 'react';
import ModuleLayoutsContext from '../contexts/ModuleLayoutsContext';

export function useModuleLayoutsContext() {
    return useContext(ModuleLayoutsContext);
}

export default useModuleLayoutsContext;
