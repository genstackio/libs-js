import { useCallback, useState } from 'react';
import useModuleDebugPanelsContext from '../hooks/useModuleDebugPanelsContext';

export function DebugPanel({ kind, ...props }: DebugPanelProps) {
    const kinds = useModuleDebugPanelsContext();
    const Comp = kinds[kind || ''] || undefined;
    const [opened, setOpened] = useState(false);

    const onOpen = useCallback(
        (e) => {
            e?.stopPropagation?.();
            e?.preventDefault?.();
            setOpened(true);
        },
        [setOpened],
    );
    const onClose = useCallback(
        (e) => {
            e?.stopPropagation?.();
            e?.preventDefault?.();
            setOpened(false);
        },
        [setOpened],
    );

    if (!Comp) return null;

    return (
        <div className={'hidden group-hover:block group-hover:absolute left-4 top-4'} style={{ zIndex: 100 }}>
            <Comp {...props} opened={opened} onOpen={onOpen} onClose={onClose} />
        </div>
    );
}

export interface DebugPanelProps {
    kind?: string;
    [key: string]: any;
}

export default DebugPanel;
