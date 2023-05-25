import clsx from 'clsx';
import FieldSet from '../FieldSet';
import useField from '../../hooks/useField';
import { AsTextField } from '../../as';
import { WithRows } from '../../withs';

export function TextareaField({ className, ...props }: TextareaFieldProps) {
    const {
        name,
        required,
        label,
        error,
        helper,
        disabled,
        register,
        placeholder,
        options,
        labelClassName,
        labelFormat,
        errorClassName,
        helperClassName,
        center,
        rounded,
        extra,
    } = useField(props);

    return (
        <FieldSet
            error={error}
            helper={helper}
            label={label}
            name={name}
            options={options}
            className={className}
            labelFormat={labelFormat}
            labelClassName={labelClassName}
            errorClassName={errorClassName}
            helperClassName={helperClassName}
            center={center}
            rounded={rounded}
        >
            <textarea
                className={clsx(
                    'text-sm sm:text-base w-full border rounded placeholder-disabled ' +
                        'focus:border-indigo-400 focus:outline-none py-2 px-2 focus:ring-2',
                    error && 'border border-danger focus:border-danger ring-red-300',
                )}
                disabled={disabled}
                name={name}
                placeholder={placeholder}
                required={required}
                {...register()}
                {...extra}
            />
        </FieldSet>
    );
}

export interface TextareaFieldProps extends AsTextField, WithRows {}

// noinspection JSUnusedGlobalSymbols
export default TextareaField;
