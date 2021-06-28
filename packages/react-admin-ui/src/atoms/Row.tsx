import clsx from 'clsx';
import { class_name, children, flag } from '../types';

export function Row({ className, children, center = false }: RowProps) {
    return <div className={clsx('flex', center && 'items-center', className)}>{children || ''}</div>;
}

export interface RowProps {
    className?: class_name;
    children?: children;
    center?: flag;
}

export default Row;
