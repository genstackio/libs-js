import { useContext } from 'react';
import ModuleDebugPanelsContext from '../contexts/ModuleDebugPanelsContext';

export function useModuleDebugPanelsContext() {
    return useContext(ModuleDebugPanelsContext);
}

export default useModuleDebugPanelsContext;
