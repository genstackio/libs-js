import clsx from 'clsx';

export function FieldLabel({ name, label, error, options }: FieldLabelProps) {
    if (!label) return null;
    return (
        <label
            htmlFor={name}
            className={clsx(
                'mb-1 text-xs sm:text-sm tracking-wide text-gray-600 capitalize',
                options.required && 'font-bold',
                error && 'text-red-500',
            )}
        >
            {label}
            {options.required && '*'}
        </label>
    );
}

export interface FieldLabelProps {
    name: string;
    label?: string;
    options?: any;
    error?: any;
}

export default FieldLabel;
