import { useCallback } from 'react';
import clsx from 'clsx';
import Icon from './Icon';
import useToggle from '../hooks/useToggle';
import { WithActive, WithActiveIcon, WithCount, WithIcon, WithOnToggle, WithSizeOfText } from '../withs';
import { AsComponent } from '../as';

export function ToolbarItem({
    className,
    icon,
    iconSize,
    activeIcon,
    activeIconSize,
    active,
    onToggle,
    size = 'lg',
    count,
}: ToolbarItemProps) {
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
            icon={localActive ? activeIcon || (iconSize ? iconSize : icon) : iconSize ? iconSize : icon}
            size={localActive && activeIconSize ? activeIconSize : size}
            className={clsx('flex cursor-pointer', className)}
            onClick={handleToggle}
        />
    );
}

export interface BaseToolbarItemProps extends AsComponent, WithActive, WithOnToggle {}

export interface ToolbarItemProps extends BaseToolbarItemProps, WithIcon, WithCount, WithSizeOfText, WithActiveIcon {}

// noinspection JSUnusedGlobalSymbols
export default ToolbarItem;
