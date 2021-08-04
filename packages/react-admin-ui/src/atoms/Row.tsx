import clsx from 'clsx';
import { WithCenter, WithChildren, WithClassName } from '../withs';

export function Row({ className, children, center = false }: RowProps) {
    return <div className={clsx('flex', center && 'items-center', className)}>{children || ''}</div>;
}

export interface RowProps extends WithClassName, WithChildren, WithCenter {}

export default Row;
