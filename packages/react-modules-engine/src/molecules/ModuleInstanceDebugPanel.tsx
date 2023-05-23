import useModuleContext from '../hooks/useModuleContext';
import {
    WithNativeOnClickAsOnClose,
    WithNativeOnClickAsOnOpen,
    WithOpened,
    WithType,
} from '@genstackio/react-types/lib/withs';
import useModuleModalComponentContext from '../hooks/useModuleModalComponentContext';

export function ModuleInstanceDebugPanel({ type, opened, onOpen, onClose }: ModuleInstanceDebugPanelProps) {
    const Modal = useModuleModalComponentContext();
    const m = useModuleContext();

    return (
        <div className={'p-4 text-xs bg-white text-gray'} onClick={onOpen}>
            Module: {type}
            {!!Modal && opened && (
                <Modal onClose={onClose} opened={opened} title={`Module ${type}`}>
                    <div className={'p-4'}>
                        <pre>{JSON.stringify(m, null, 4)}</pre>
                    </div>
                </Modal>
            )}
        </div>
    );
}

export interface ModuleInstanceDebugPanelProps
    extends WithNativeOnClickAsOnOpen,
        WithNativeOnClickAsOnClose,
        WithOpened,
        WithType {}
export default ModuleInstanceDebugPanel;
