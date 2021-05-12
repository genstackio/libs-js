import clsx from 'clsx';
import boxClass from '../utils/boxClass';
import {box_color, box_variant} from '../types';
import Icon from "./Icon";

export function Tag({color, icon, size, text, variant}: TagProps) {
    return (
        <div className={clsx(boxClass({color: color, variant: variant}),
            'inline-flex pr-4 pl-4 rounded-lg text-white font-bold uppercase pt-1 py-1 space-x-1'
        )}>
            {text && <div>{text}</div>}
            {icon ? <Icon size={size} icon={icon} />:<div />}
        </div>
    );
}

export interface TagProps {
    color?: box_color,
    icon?: string,
    size?: number,
    text?: string,
    variant?: box_variant,
}

export default Tag