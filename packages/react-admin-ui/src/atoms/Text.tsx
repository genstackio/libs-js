import React from 'react';
import clsx from 'clsx';
import {box_color} from "../types";

const colors = {
    inherit: 'text-current',
    primary: 'text-primary',
    secondary: 'text-secondary',
    success: 'text-success',
    info: 'text-info',
    warning: 'text-warning',
    danger: 'text-danger',
    light: 'text-light',
    dark: 'text-dark',
}

const variants = {
    title1: 'text-6xl font-bold',
    title2: 'text-5xl font-bold',
    title3: 'text-4xl font-bold',
    title4: 'text-3xl font-bold',
    title5: 'text-2xl font-bold',
    title6: 'text-xl font-bold',
    subtitle:'text-lg font-light',
    underline: 'text-base underline',
    body: 'text-base',
    description: 'text-sm',
}

export function Text({text, color = 'inherit', variant = 'body'}: TextProps) {
    return (
        <div className={clsx(colors[color], variants[variant])}>{text}</div>
    );
}

export interface TextProps {
    variant?: 'text' | 'title1' | 'title2' | 'title3' | 'title4' | 'title5' | 'title6' | 'body' | 'overline' | 'description' | 'subtitle',
    color?: 'inherit' | box_color,
    text?: string,
}

export default Text