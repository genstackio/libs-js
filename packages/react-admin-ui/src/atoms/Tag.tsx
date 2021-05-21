import clsx from 'clsx';
import colorClass from '../utils/colorClass';
import {box_color, box_variant} from '../types';
import Icon from '@material-ui/core/Icon';

export function Tag({color, text, variant, icon}: TagProps) {
    return (
        <div className={clsx(colorClass({color: color, variant: variant}),
            'inline-flex pr-4 pl-4 rounded-lg text-white font-bold uppercase pt-1 py-1'
        )}>
            {text}
            {(icon && text) ? <div className='ml-1 pt-0.5'><Icon style={{ fontSize: 19 }}>{icon}</Icon></div>:<Icon>{icon}</Icon> }
        </div>
    );
}

export interface TagProps {
    text?: string,
    color?: box_color,
    variant?: box_variant,
    icon?: string,
}

export default Tag