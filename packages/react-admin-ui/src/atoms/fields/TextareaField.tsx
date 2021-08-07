import clsx from 'clsx';
import useField from '../../hooks/useField';
import FieldSet from '../FieldSet';
import { WithValue } from '../../withs';
import { AsField } from '../../as';

export function TextareaField({ className, ...props }: TextareaFieldProps) {
    const { name, required, label, error, helper, disabled, register, placeholder, options, extra } = useField(props);
    return (
        <FieldSet name={name} label={label} options={options} error={error} helper={helper} className={className}>
            <textarea
                className={clsx(
                    'text-sm sm:text-base w-full border rounded placeholder-disabled ' +
                        'focus:border-indigo-400 focus:outline-none py-2 px-2 focus:ring-2',
                    error && 'border border-danger focus:border-danger ring-red-300',
                )}
                placeholder={placeholder}
                disabled={disabled}
                name={name}
                required={required}
                {...register()}
                {...extra}
            />
        </FieldSet>
    );
}

export interface TextareaFieldProps extends AsField, WithValue {
    rows?: number;
}

// noinspection JSUnusedGlobalSymbols
export default TextareaField;
