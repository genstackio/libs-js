import clsx from 'clsx';
import {useTranslation} from "react-i18next";
import {useMemo} from "react";

export function TextField({disabled = false, type = 'text', required = false, helper, errors = {}, defaults = {}, label, placeholder, register = () => ({}), name, options = {}, ...props}: TextFieldProps) {
    name = name || 'text';
    const {t} = useTranslation();
    label = label ? t(label) : t([`field_${name.toLowerCase()}_label`, ''])
    helper = helper ? t(helper) : t([`field_${name.toLowerCase()}_helper`, ''])
    placeholder = placeholder ? t(placeholder) : t([ `field_${name.toLowerCase()}_placeholder`, '']);
    const errorData = errors[name] || errors['all'];
    const error = !!errorData;
    const errorText = error ? (errorData.message || t(['constraints_required'])) : undefined;
    options = useMemo(() => ({
        ...options,
        required,
    }), [options, required]);
    const defaultValue = defaults[name];
    return (
        <div className={'mb-2'}>
            <div>
                {label && (
                    <label htmlFor={label}
                           className={clsx(
                               'mb-1 text-xs sm:text-sm tracking-wide text-gray-600 capitalize',
                               options.required && 'font-bold',
                               error && 'text-red-500'
                           )}
                    >
                        {label}{options.required && '*'}
                    </label>
                )}
                <input className={clsx(
                    'text-sm sm:text-base w-full border rounded placeholder-gray-400 ' +
                    'focus:border-indigo-400 focus:outline-none py-2 pr-2 pl-2 focus:ring-2',
                    error && 'border border-red-500 focus:border-red-500 ring-red-300')}
                       placeholder={placeholder}
                       disabled={disabled}
                       type={type}
                       defaultValue={defaultValue}
                       {...register(name, options)}
                       {...props}
                />
                {error && (
                    <span className={'flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1'}>
                        {errorText}
                    </span>
                )}
                {helper && (
                    <span className={'flex items-center font-medium tracking-wide text-xs mt-1 ml-1 text-gray-500'}>
                        {helper}
                    </span>
                )}
            </div>
        </div>
    );
}

export interface TextFieldProps {
    required?: boolean,
    type?: string,
    disabled?: boolean,
    errors?: {[key: string]: any},
    defaults?: {[key: string]: any},
    label?: string,
    placeholder?: string,
    name?: string,
    onChange?: any,
    autoFocus?: boolean,
    value?: any,
    options?: any,
    helper?: string,
    register: Function,
}

export default TextField