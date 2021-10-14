import clsx from 'clsx';
import boxClass from '../mappings/boxs';
import dividerSizeClass from '../mappings/divider-sizes';
import useBox from '../hooks/useBox';
import { AsBox } from '../as';
import { WithSize } from '../withs';

export function Divider({ className, size, ...props }: DividerProps) {
    const [box] = useBox(props, { variant: 'contained' });

    return <hr className={clsx(boxClass(box), dividerSizeClass(size), className)} />;
}

export interface DividerProps extends AsBox, WithSize {}

// noinspection JSUnusedGlobalSymbols
export default Divider;
