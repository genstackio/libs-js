import { useContext } from 'react';
import ModuleModalComponentContext from '../contexts/ModuleModalComponentContext';

export function useModuleModalComponentContext() {
    return useContext(ModuleModalComponentContext);
}

export default useModuleModalComponentContext;
