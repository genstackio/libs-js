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

export function Tag({color = 'primary', text}: TagProps) {
    return (
        <div className={clsx(colors[color], 'text-xs inline-flex font-bold uppercase pr-4 pl-4 py-1 rounded-lg text-white')}>
            {text}
        </div>
    );
}

export interface TagProps {
    text?: string,
    color?: box_color,
}

export default Tag