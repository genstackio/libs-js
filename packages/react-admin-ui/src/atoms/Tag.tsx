import clsx from 'clsx';
import boxClass from '../utils/boxClass';
import {icon, rich_text, text_size} from '../types';
import Icon from './Icon';
import { box_color } from '../mappings/box-colors';
import { box_variant } from '../mappings/box-variants';

export function Tag({ color, icon, size, text, variant }: TagProps) {
    return (
        <div
            className={clsx(
                boxClass({ color, variant, size }),
                'inline-flex pr-4 pl-4 rounded-lg text-white font-bold uppercase pt-1 py-1 space-x-1',
            )}
        >
            {text && <div>{text}</div>}
            <Icon size={size} icon={icon} />
        </div>
    );
}

export interface TagProps {
    color?: box_color;
    icon?: icon;
    size?: text_size;
    text?: rich_text;
    variant?: box_variant;
}

export default Tag;
