import clsx from 'clsx';
import { flag, register } from '../../types';
import useField from '../../hooks/useField';
import FieldSet from '../FieldSet';
import { WithClassName } from '../../withs';

export function TextareaField({ className, ...props }: TextareaFieldProps) {
    const { name, required, label, error, helper, disabled, register, placeholder, options, extra } = useField(props);
    return (
        <FieldSet name={name} label={label} options={options} error={error} helper={helper} className={clsx(className)}>
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

export interface TextareaFieldProps extends WithClassName {
    required?: flag;
    disabled?: flag;
    errors?: { [key: string]: any };
    defaultValues?: { [key: string]: any };
    label?: string;
    placeholder?: string;
    name?: string;
    onChange?: any;
    autoFocus?: flag;
    value?: any;
    options?: any;
    helper?: string;
    register?: register;
    field?: boolean;
    rows?: number;
    kind?: string;
}

export default TextareaField;
