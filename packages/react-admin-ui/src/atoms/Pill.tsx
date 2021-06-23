import clsx from 'clsx';
import { rich_text } from '../types';
import boxClass from '../utils/boxClass';
import { box_color } from '../mappings/box-colors';
import { box_variant } from '../mappings/box-variants';

export function Pill({ color, text, variant }: PillProps) {
    return (
        <div
            className={clsx(
                boxClass({ color, variant }),
                'text-xs inline-flex font-bold uppercase pl-2 pr-2 py-1 rounded-full text-white',
            )}
        >
            {text}
        </div>
    );
}

export interface PillProps {
    color?: box_color;
    text?: rich_text;
    variant?: box_variant;
}

export default Pill;
