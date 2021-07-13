import { useCallback } from 'react';
import clsx from 'clsx';
import Icon from './Icon';
import { text_size } from '../types';
import useToggle from '../hooks/useToggle';
import { WithActive, WithClassName, WithIcon } from '../withs';

export function ToolbarItem({ className, icon, activeIcon, active, onToggle, size = 'lg', count }: ToolbarItemProps) {
    const [localActive, toggle] = useToggle(active);
    const handleToggle = useCallback(
        (...args) => {
            onToggle && onToggle(...args);
            toggle(...args);
        },
        [toggle, onToggle],
    );
    return (
        <Icon
            count={count}
            icon={localActive ? activeIcon || icon : icon}
            size={size}
            className={clsx('flex cursor-pointer', className)}
            onClick={handleToggle}
        />
    );
}

export interface BaseToolbarItemProps extends WithClassName, WithActive {
    onToggle?: Function;
}

export interface ToolbarItemProps extends BaseToolbarItemProps, WithIcon {
    activeIcon?: string;
    size?: text_size;
    count?: number;
}

export default ToolbarItem;
