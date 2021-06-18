import clsx from 'clsx';
import {flag, register} from '../../types';
import FieldHelper from "../FieldHelper";
import FieldLabel from "../FieldLabel";
import {useField} from "../../hooks/useField";
import FieldError from "../FieldError";

export function TextareaField({...props}: TextareaFieldProps) {
    const {name, required, label, error, helper, disabled, register, placeholder, options, extra} = useField(props);
    return (
        <div className={'mb-2'}>
            <div>
                <FieldLabel name={name} label={label} options={options} />
                <textarea className={clsx(
                    'text-sm sm:text-base w-full border rounded placeholder-gray-400 ' +
                    'focus:border-indigo-400 focus:outline-none py-2 px-2 focus:ring-2',
                    error && 'border border-red-500 focus:border-red-500 ring-red-300')}
                       placeholder={placeholder}
                       disabled={disabled}
                       name={name}
                       required={required}
                       {...register()}
                       {...extra}
                 />
                <FieldError error={error} />
                <FieldHelper helper={helper} />
            </div>
        </div>
    );
}

export interface TextareaFieldProps {
    required?: flag,
    disabled?: flag,
    errors?: {[key: string]: any},
    defaults?: {[key: string]: any},
    label?: string,
    placeholder?: string,
    name?: string,
    onChange?: any,
    autoFocus?: flag,
    value?: any,
    options?: any,
    helper?: string,
    register?: register,
    field?: boolean,
    rows?: number,
}

export default TextareaField