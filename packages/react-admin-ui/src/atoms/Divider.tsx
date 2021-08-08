import clsx from 'clsx';
import boxClass from '../utils/boxClass';
import dividerSizeClass from '../mappings/divider-sizes';
import { WithBox, WithSize } from '../withs';
import { AsComponent } from '../as';

export function Divider({ className, size, color, variant = 'contained' }: DividerProps) {
    return <hr className={clsx(boxClass({ color, variant }), dividerSizeClass(size), className)} />;
}

export interface DividerProps extends AsComponent, WithBox, WithSize {}

// noinspection JSUnusedGlobalSymbols
export default Divider;
