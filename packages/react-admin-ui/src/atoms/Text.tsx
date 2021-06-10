import clsx from 'clsx';
import {box_color} from "../types";

const colors = {
    danger: 'text-danger',
    dark: 'text-dark',
    info: 'text-info',
    inherit: 'text-current',
    light: 'text-light',
    primary: 'text-primary',
    secondary: 'text-secondary',
    success: 'text-success',
    warning: 'text-warning',
}

const variants = {
    body: 'text-base font-body',
    cross: 'text-base line-through',
    description: 'text-sm font-description',
    subtitle:'text-lg font-light font-subtitle',
    title1: 'text-6xl font-bold font-title1',
    title2: 'text-5xl font-bold font-title2',
    title3: 'text-4xl font-bold font-title3',
    title4: 'text-3xl font-bold font-title4',
    title5: 'text-2xl font-bold font-title5',
    title6: 'text-xl font-bold font-title6',
    title7: 'text-xxl xs:text-9xl font-bold font-title7 -mt-12 -mb-8 xs:m-0',
    underline: 'text-base underline font-underline',
}

export function Text({color = 'inherit', text, variant = 'body'}: TextProps) {
    return (
        <div className={clsx(colors[color], variants[variant])}>{text}</div>
    );
}

export interface TextProps {
    color?: 'inherit' | box_color,
    text?: string,
    variant?: 'body' | 'cross' | 'description' | 'overline' | 'subtitle' | 'text' | 'title1' | 'title2' | 'title3' | 'title4' | 'title5' | 'title6' | 'title7' | 'underline',
}

export default Text