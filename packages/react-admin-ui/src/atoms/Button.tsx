import {ReactNode, useCallback} from 'react';
import clsx from "clsx";
import Icon from "./Icon";
import colorClass from "../utils/colorClass";
import {box_color, box_variant} from '../types';

export function Button({children, classes, color = 'primary', variant = 'filled', large, disabled, onClick, icon}: ButtonProps) {
    const handleClick = useCallback (() => {
        ('function' === typeof onClick) && onClick();
        ('string' === typeof onClick) && (location.href = onClick);
    }, [onClick]);
    return (
        <button
            disabled={disabled}
            className={clsx(classes, colorClass({color, variant, disabled}), 'py-2 px-4 rounded inline-flex items-center', disabled && 'opacity-50 cursor-not-allowed', large && 'w-60')}
            onClick={handleClick}
        >
            {icon && <Icon icon={icon} />}
            {children || ''}
        </button>
    );
}

export interface ButtonProps {
    children?: ReactNode,
    classes?: string,
    color?: box_color,
    variant?: box_variant,
    large?: boolean,
    disabled?: boolean,
    onClick?: Function|string,
    icon?: string,
}

export default Button