import clsx from 'clsx';
import { flag } from '../types';
import { WithChildren, WithClassName } from '../withs';

export function Column({ className, children, center = false }: ColumnProps) {
    return <div className={clsx('w-full flex flex-col', center && 'justify-center', className)}>{children || ''}</div>;
}

export interface ColumnProps extends WithClassName, WithChildren {
    center?: flag;
}

export default Column;
