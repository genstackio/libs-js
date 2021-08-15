import clsx from 'clsx';
import Icon from './Icon';
import useToggle from '../hooks/useToggle';
import { AsComponent } from '../as';
import { WithActive, WithActiveIcon, WithCount, WithIcon, WithOnToggle, WithSizeOfText } from '../withs';

export function ToolbarItem({
    active,
    activeIcon,
    activeIconSize,
    className,
    count,
    icon,
    iconSize,
    onToggle,
    size = 'lg',
}: ToolbarItemProps) {
    const [localActive, handleToggle] = useToggle(active, onToggle);

    return (
        <Icon
            count={count}
            icon={localActive ? activeIcon || (iconSize ? iconSize : icon) : iconSize ? iconSize : icon}
            onClick={handleToggle}
            size={localActive && activeIconSize ? activeIconSize : size}
            className={clsx('flex cursor-pointer', className)}
        />
    );
}

export interface BaseToolbarItemProps extends AsComponent, WithActive, WithOnToggle {}

export interface ToolbarItemProps extends BaseToolbarItemProps, WithIcon, WithCount, WithSizeOfText, WithActiveIcon {}

// noinspection JSUnusedGlobalSymbols
export default ToolbarItem;
