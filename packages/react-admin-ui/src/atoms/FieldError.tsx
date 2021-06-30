import { class_name } from '../types';
import clsx from 'clsx';

export function FieldError({ className, error }: FieldErrorProps) {
    if (!error) return null;
    return (
        <span className={clsx('flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1', className)}>
            {error}
        </span>
    );
}

export interface FieldErrorProps {
    className?: class_name;
    error?: string;
}

export default FieldError;
