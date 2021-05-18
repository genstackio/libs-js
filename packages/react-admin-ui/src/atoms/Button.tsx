import {ReactNode} from 'react';
import clsx from "clsx";
import colorClass from "../utils/colorClass";
import {box_color, box_variant} from '../types';

export function Button({children, classes, color = 'primary', variant = 'filled', large, disabled, onClick}: ButtonProps) {
    return (
        <button disabled={disabled} className={clsx(classes, colorClass({color, variant, disabled}), 'py-2 px-4 rounded', disabled && 'opacity-50 cursor-not-allowed', large && 'w-60')} onClick={onClick}>{children || ''}</button>
    );
}

export interface ButtonProps {
    children?: ReactNode,
    classes?: string,
    color?: box_color,
    variant?: box_variant,
    large?: boolean,
    disabled?: boolean,
    onClick?: any,
}

export default Button