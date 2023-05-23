import clsx from 'clsx';
import { flag } from '../types';
import { AsComponent } from '../as';
import { WithName, WithLabel, WithOptions } from '../withs';

const stylings: any = {
    defaults: { format: 'upperfirst' },
    formats: {
        capital: 'capitalize',
        normal: '',
        uppercase: 'uppercase',
        lowercase: 'lowercase',
        upperfirst: '',
    },
};

export function FieldLabel({
    className,
    error,
    label,
    name,
    format = stylings.defaults.format,
    options = {},
}: FieldLabelProps) {
    if (!label) return null;

    label =
        'upperfirst' === format && 'string' === typeof label
            ? `${label.slice(0, 1).toUpperCase()}${label.slice(1)}`
            : label;
    return (
        <label
            htmlFor={name}
            className={clsx(
                'mb-1 text-xs sm:text-sm tracking-wide text-dark',
                stylings.formats[format || stylings.defaults.format],
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
    format?: 'normal' | 'capital' | 'uppercase' | 'lowercase' | 'upperfirst';
}

// noinspection JSUnusedGlobalSymbols
export default FieldLabel;
