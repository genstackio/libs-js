import React, {ReactNode} from 'react';
import clsx from "clsx";
import colorClass from "../utils/colorClass";

export function Button({children, color = 'primary', variant = 'filled', large, disabled}: ButtonProps) {
    return (
        <button disabled={disabled} className={clsx(colorClass({color, variant, disabled}), 'py-2 px-4 rounded', disabled && 'opacity-50 cursor-not-allowed', large && 'w-60')}>{children || ''}</button>
    );
}

export interface ButtonProps {
    children?: ReactNode,
    color?: 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger' | 'light' | 'dark',
    variant?: 'filled' | 'outlined' | 'contained',
    large?: boolean,
    disabled?: boolean,
}

export default Button