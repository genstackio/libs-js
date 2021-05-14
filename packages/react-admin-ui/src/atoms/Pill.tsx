import clsx from 'clsx';
import React from 'react';
import {box_color} from "../types";
import colorClass from "../utils/colorClass";

export function Pill({color, text}: PillProps) {
    return (
        <div className={clsx(colorClass({color: color, variant: 'contained'}), 'text-xs inline-flex font-bold uppercase pl-2 pr-2 py-1 rounded-full text-white')}>
            {text}
        </div>
    );
}

export interface PillProps {
    text?: string,
    color?: box_color,
}

export default Pill