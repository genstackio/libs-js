import clsx from 'clsx';
import colorClass from '../utils/colorClass';
import {box_color, box_variant} from '../types';
import Icon from "./Icon";

export function Tag({color, text, variant, icon, size}: TagProps) {
    return (
        <div className={clsx(colorClass({color: color, variant: variant}),
            'inline-flex pr-4 pl-4 rounded-lg text-white font-bold uppercase pt-1 py-1 space-x-1'
        )}>
            {text && <div>{text}</div>}
            {icon ? <Icon size={size} icon={icon} />:<div />}
        </div>
    );
}

export interface TagProps {
    text?: string,
    color?: box_color,
    variant?: box_variant,
    icon?: string,
    size?: number,
}

export default Tag