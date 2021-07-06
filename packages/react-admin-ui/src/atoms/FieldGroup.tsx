import clsx from 'clsx';
import { children, class_name } from '../types';

export function FieldGroup({ className, children }: FieldGroupProps) {
    return <div className={clsx('flex space-x-4 xs:flex-col xs:space-x-0', className)}>{children || ''}</div>;
}

export interface FieldGroupProps {
    className?: class_name;
    children?: children;
}

export default FieldGroup;
