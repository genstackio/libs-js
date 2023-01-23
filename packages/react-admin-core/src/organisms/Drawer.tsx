import { useCallback } from 'react';
import { Drawer as BaseDrawer } from '@material-ui/core';

export function Drawer({ opened = false, onClose, position = 'right', children }: DrawerProps) {
    const onCloseDrawer = useCallback(
        (e: any) => {
            e.stopPropagation();
            e.preventDefault();
            onClose && onClose();
        },
        [onClose],
    );
    return (
        <BaseDrawer open={opened} onClose={onCloseDrawer} anchor={position}>
            {children || false}
        </BaseDrawer>
    );
}

export interface DrawerProps {
    opened?: boolean;
    onClose?: Function;
    children?: any;
    position?: 'left' | 'top' | 'right' | 'bottom';
}

// noinspection JSUnusedGlobalSymbols
export default Drawer;
