import { module_debug_panels_context_value } from '../types';
import GroupInstanceDebugPanel from '../molecules/GroupInstanceDebugPanel';
import ModuleInstanceDebugPanel from '../molecules/ModuleInstanceDebugPanel';

export function createDefaultModuleDebugPanelsContextValue(): module_debug_panels_context_value {
    return {
        groupInstance: GroupInstanceDebugPanel,
        moduleInstance: ModuleInstanceDebugPanel,
    };
}

export default createDefaultModuleDebugPanelsContextValue;
