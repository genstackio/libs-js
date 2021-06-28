import clsx from 'clsx';
import { class_name, children, flag } from '../types';

export function Column({ className, children, center = false }: ColumnProps) {
    return <div className={clsx('w-full flex flex-col', center && 'justify-center', className)}>{children || ''}</div>;
}

export interface ColumnProps {
    className?: class_name;
    children?: children;
    center?: flag;
}

export default Column;
