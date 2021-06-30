import clsx from 'clsx';
import { class_name } from '../types';

export function FieldLabel({ className, name, label, error, options }: FieldLabelProps) {
    if (!label) return null;
    return (
        <label
            htmlFor={name}
            className={clsx(
                'mb-1 text-xs sm:text-sm tracking-wide text-gray-600 capitalize',
                options.required && 'font-bold',
                error && 'text-red-500',
                className,
            )}
        >
            {label}
            {options.required && '*'}
        </label>
    );
}

export interface FieldLabelProps {
    className?: class_name;
    name: string;
    label?: string;
    options?: any;
    error?: boolean;
}

export default FieldLabel;
