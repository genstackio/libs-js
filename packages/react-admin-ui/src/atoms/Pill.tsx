import clsx from 'clsx';
import React from 'react';
import {box_color} from "../types";

const colors = {
    primary :'bg-primary',
    secondary :'bg-secondary',
    success : 'bg-success',
    info : 'bg-info',
    warning : 'bg-warning',
    danger : 'bg-danger',
    light : 'bg-light',
    dark : 'bg-dark',
}

export function Pill({color = 'primary', text}: PillProps) {
    return (
        <div className={clsx(colors[color], 'text-xs inline-flex font-bold uppercase pl-2 pr-2 py-1 rounded-full text-white')}>
            {text}
        </div>
    );
}

export interface PillProps {
    text?: string,
    color?: box_color,
}

export default Pill