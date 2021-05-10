import React, {ReactNode} from 'react';
import clsx from "clsx";
import colorClass from "../utils/colorClass";
import {box_color, box_variant} from '../types';

export function Button({children, color = 'primary', variant = 'filled', large, disabled}: ButtonProps) {
    return (
        <button disabled={disabled} className={clsx(colorClass({color, variant, disabled}), 'py-2 px-4 rounded', disabled && 'opacity-50 cursor-not-allowed', large && 'w-60')}>{children || ''}</button>
    );
}

export interface ButtonProps {
    children?: ReactNode,
    color?: box_color,
    variant?: box_variant,
    large?: boolean,
    disabled?: boolean,
}

export default Button