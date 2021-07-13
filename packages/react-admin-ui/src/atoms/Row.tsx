import clsx from 'clsx';
import { flag } from '../types';
import { WithChildren, WithClassName } from '../withs';

export function Row({ className, children, center = false }: RowProps) {
    return <div className={clsx('flex', center && 'items-center', className)}>{children || ''}</div>;
}

export interface RowProps extends WithClassName, WithChildren {
    center?: flag;
}

export default Row;
