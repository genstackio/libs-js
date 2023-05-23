import { useContext } from 'react';
import ModuleContext from '../contexts/ModuleContext';

export function useModuleContext() {
    return useContext(ModuleContext);
}

export default useModuleContext;
