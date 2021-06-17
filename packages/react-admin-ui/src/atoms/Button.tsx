import {useCallback} from 'react';
import clsx from "clsx";
import Icon from "./Icon";
import buttonClass from "../utils/buttonClass";
import {box_color, box_variant, children, class_name, icon, target} from '../types';

export function Button({children, className, color = 'primary', disabled,  icon, large, onClick, variant = 'filled'}: ButtonProps) {
    const handleClick = useCallback (() => {
        ('function' === typeof onClick) && onClick();
        ('string' === typeof onClick) && (location.href = onClick);
    }, [onClick]);
    return (
        <button
            disabled={disabled}
            className={clsx(className, buttonClass({color, variant, disabled}), 'py-2 px-4 rounded inline-flex items-center', disabled && 'opacity-50 cursor-not-allowed', large && 'w-60')}
            onClick={handleClick}
        >
            <Icon icon={icon} />
            {children || ''}
        </button>
    );
}

export interface ButtonProps {
    children?: children,
    className?: class_name,
    color?: box_color,
    disabled?: boolean,
    icon?: icon,
    large?: boolean,
    onClick?: target,
    variant?: box_variant,
}

export default Button