import clsx from 'clsx';
import { flag } from '../types';
import { WithClassName, WithName, WithLabel } from '../withs';

export function FieldLabel({ className, name, label, error, options = {} }: FieldLabelProps) {
    if (!label) return null;
    return (
        <label
            htmlFor={name}
            className={clsx(
                'mb-1 text-xs sm:text-sm tracking-wide text-dark capitalize',
                options.required && 'font-bold',
                error && 'text-danger',
                className,
            )}
        >
            {label}
            {!!options?.required && '*'}
        </label>
    );
}

export interface FieldLabelProps extends WithClassName, WithName, WithLabel {
    options?: any;
    error?: flag;
}

export default FieldLabel;
