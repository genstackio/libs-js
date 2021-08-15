import clsx from 'clsx';
import { flag } from '../types';
import { AsComponent } from '../as';
import { WithName, WithLabel, WithOptions } from '../withs';

export function FieldLabel({ className, error, label, name, options = {} }: FieldLabelProps) {
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

export interface FieldLabelProps extends AsComponent, Required<WithName>, WithLabel, WithOptions {
    error?: flag;
}

// noinspection JSUnusedGlobalSymbols
export default FieldLabel;
