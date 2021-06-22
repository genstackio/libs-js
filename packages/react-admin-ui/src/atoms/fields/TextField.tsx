import clsx from 'clsx';
import {class_name, flag, register} from '../../types';
import {useField} from "../../hooks/useField";
import FieldSet from "../FieldSet";

export function TextField({className, ...props}: TextFieldProps) {
    const {name, required, label, error, helper, disabled, register, placeholder, options, defaultValue, type, extra} = useField(props);
    return (
        <FieldSet className={className} name={name} label={label} options={options} error={error} helper={helper}>
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
        </FieldSet>
    );
}

export interface TextFieldProps {
    className?: class_name,
    required?: flag,
    type?: string,
    disabled?: flag,
    errors?: {[key: string]: any},
    defaultValues?: {[key: string]: any},
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
    kind?: string,
}

export default TextField
