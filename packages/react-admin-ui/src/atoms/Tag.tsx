import clsx from 'clsx';
import boxClass from '../utils/boxClass';
import {box_color, box_variant, icon, rich_text} from '../types';
import Icon from "./Icon";

export function Tag({color, icon, size, text, variant}: TagProps) {
    return (
        <div className={clsx(boxClass({color, variant}),
            'inline-flex pr-4 pl-4 rounded-lg text-white font-bold uppercase pt-1 py-1 space-x-1'
        )}>
            {text && <div>{text}</div>}
            <Icon size={size} icon={icon} />
        </div>
    );
}

export interface TagProps {
    color?: box_color,
    icon?: icon,
    size?: number,
    text?: rich_text,
    variant?: box_variant,
}

export default Tag