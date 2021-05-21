import clsx from 'clsx';
import {box_color, box_variant} from '../types';
import colorClass from '../utils/colorClass';

export function Pill({color, text, variant}: PillProps) {
    return (
        <div className={
            clsx(colorClass({color: color, variant: variant}),
                'text-xs inline-flex font-bold uppercase pl-2 pr-2 py-1 rounded-full text-white')}
        >{text}</div>
    );
}

export interface PillProps {
    text?: string,
    color?: box_color,
    variant?: box_variant,
}

export default Pill