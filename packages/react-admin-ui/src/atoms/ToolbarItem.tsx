import clsx from 'clsx';
import Icon from './Icon';
import { class_name, text_size } from '../types';
import { useToggle } from '../hooks';
import { useCallback } from 'react';

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

export interface BaseToolbarItemProps {
    className?: class_name;
    active?: boolean;
    onToggle?: Function;
}

export interface ToolbarItemProps extends BaseToolbarItemProps {
    icon: string;
    activeIcon?: string;
    size?: text_size;
    count?: number;
}

export default ToolbarItem;
