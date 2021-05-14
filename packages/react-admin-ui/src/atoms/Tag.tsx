import clsx from 'clsx';
import React from 'react';
import colorClass from "../utils/colorClass";
import {box_color} from "../types";

export function Tag({color, text}: TagProps) {
    return (
        <div className={clsx(colorClass({color: color, variant: 'contained'}), 'text-xs inline-flex font-bold uppercase pr-4 pl-4 py-1 rounded-lg text-white')}>
            {text}
        </div>
    );
}

export interface TagProps {
    text?: string,
    color?: box_color,
}

export default Tag