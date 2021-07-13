import clsx from 'clsx';
import boxClass from '../utils/boxClass';
import dividerSizeClass from '../mappings/divider-sizes';
import { WithBox, WithClassName, WithSize } from '../withs';

export function Divider({ className, size, color, variant = 'contained' }: DividerProps) {
    return <hr className={clsx(boxClass({ color, variant }), dividerSizeClass(size), className)} />;
}

export interface DividerProps extends WithClassName, WithBox, WithSize {}

// noinspection JSUnusedGlobalSymbols
export default Divider;
