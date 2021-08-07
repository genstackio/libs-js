import clsx from 'clsx';
import { flag } from '../types';
import { WithClassName, WithName, WithLabel, WithOptions } from '../withs';

export function FieldLabel({ className, name, label, error, options = {} }: FieldLabelProps) {
    return label ? (
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
    ) : null;
}

export interface FieldLabelProps extends WithClassName, Required<WithName>, WithLabel, WithOptions {
    error?: flag;
}

export default FieldLabel;
