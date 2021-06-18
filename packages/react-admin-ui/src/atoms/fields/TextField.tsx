import clsx from 'clsx';
import {flag, register} from '../../types';
import FieldHelper from "../FieldHelper";
import FieldLabel from "../FieldLabel";
import {useField} from "../../hooks/useField";
import FieldError from "../FieldError";

export function TextField({type = 'text', ...props}: TextFieldProps) {
    const {name, required, label, error, helper, disabled, register, placeholder, options, defaultValue, extra} = useField(props);
    return (
        <div className={'mb-2'}>
            <div>
                <FieldLabel name={name} label={label} options={options} />
                <input className={clsx(
                    'text-sm sm:text-base w-full border rounded placeholder-gray-400 ' +
                    'focus:border-indigo-400 focus:outline-none py-2 pr-2 pl-2 focus:ring-2',
                    error && 'border border-red-500 focus:border-red-500 ring-red-300')}
                       placeholder={placeholder}
                       disabled={disabled}
                       type={type}
                       defaultValue={defaultValue}
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

export interface TextFieldProps {
    required?: flag,
    type?: string,
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
}

export default TextField