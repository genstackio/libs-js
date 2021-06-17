import clsx from 'clsx';
import boxClass from "../utils/boxClass";
import {box_color, box_variant, children} from '../types';

export function Panel({children, color = 'primary', variant = 'contained'}: PanelProps) {
    return (
        <div className={clsx(boxClass({color, variant}), 'px-4 py-4 leading-normal flex items-center justify-between')}>
            {children || ''}
        </div>
    );
}

export interface PanelProps {
    children?: children,
    color?: box_color,
    variant?: box_variant,
}

export default Panel