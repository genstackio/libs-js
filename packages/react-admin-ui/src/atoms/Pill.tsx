import clsx from 'clsx';
import boxClass from '../utils/boxClass';
import { WithText } from '../withs';
import { AsBox } from '../as';

export function Pill({ className, color, text, variant }: PillProps) {
    return (
        <div
            className={clsx(
                boxClass({ color, variant }),
                'text-xs inline-flex font-bold uppercase pl-2 pr-2 py-1 rounded-full text-clear',
                className,
            )}
        >
            {text}
        </div>
    );
}

export interface PillProps extends AsBox, WithText {}

// noinspection JSUnusedGlobalSymbols
export default Pill;
