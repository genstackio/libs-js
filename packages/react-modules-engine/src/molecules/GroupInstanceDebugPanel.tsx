import {
    WithNativeOnClickAsOnClose,
    WithNativeOnClickAsOnOpen,
    WithOpened,
    WithType,
} from '@genstackio/react-types/lib/withs';
import useModuleModalComponentContext from '../hooks/useModuleModalComponentContext';

export function GroupInstanceDebugPanel({ type, opened, onOpen, onClose }: GroupInstanceDebugPanelProps) {
    const Modal = useModuleModalComponentContext();

    return (
        <div className={'p-4 text-xs bg-white text-gray'} onClick={onOpen}>
            Group: {type}
            {!!Modal && opened && <Modal onClose={onClose} opened={opened} title={`Group ${type}`}></Modal>}
        </div>
    );
}

export interface GroupInstanceDebugPanelProps
    extends WithNativeOnClickAsOnOpen,
        WithNativeOnClickAsOnClose,
        WithOpened,
        WithType {}
export default GroupInstanceDebugPanel;
