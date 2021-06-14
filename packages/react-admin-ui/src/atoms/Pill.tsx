import clsx from 'clsx';
import {box_color, box_variant} from '../types';
import boxClass from '../utils/boxClass';

export function Pill({color, text, variant}: PillProps) {
    return (
        <div className={
            clsx(boxClass({color: color, variant: variant}),
                'text-xs inline-flex font-bold uppercase pl-2 pr-2 py-1 rounded-full text-white')}
        >{text}</div>
    );
}

export interface PillProps {
    color?: box_color,
    text?: string,
    variant?: box_variant,
}

export default Pill