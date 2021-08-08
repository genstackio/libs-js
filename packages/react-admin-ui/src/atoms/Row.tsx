import clsx from 'clsx';
import { WithCenter } from '../withs';
import { AsWrapper } from '../as';

export function Row({ className, children, center = false }: RowProps) {
    return <div className={clsx('flex', center && 'items-center', className)}>{children || ''}</div>;
}

export interface RowProps extends AsWrapper, WithCenter {}

// noinspection JSUnusedGlobalSymbols
export default Row;
