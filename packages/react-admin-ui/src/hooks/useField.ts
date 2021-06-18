import {useMemo} from "react";
import {register} from "../types";
import {useTranslation} from "react-i18next";

// noinspection JSUnusedLocalSymbols
export function useField({name = 'text', required = false, disabled = false, helper, placeholder, errors = {}, defaultValue = undefined, defaults = {}, options = {}, label, register = (name: string, options: any) => {}, field, ...extra}: field_def_params) {
    const {t} = useTranslation();

    options = useMemo(() => ({
        ...options,
        required,
    }), [options, required]);
    label = label ? t(label) : t([`field_${name.toLowerCase()}_label`, ''])
    helper = helper ? t(helper) : t([`field_${name.toLowerCase()}_helper`, ''])
    placeholder = placeholder ? t(placeholder) : t([ `field_${name.toLowerCase()}_placeholder`, '']);

    const errorData = errors[name] || errors['all'];
    const error = errorData ? (errorData.message || t(['constraints_required'])) : undefined;
    const enrichedRegister = (extraOptions = {}) => register(name, {...options, ...extraOptions});
    defaultValue = undefined !== defaultValue ? defaultValue : defaults[name];

    return {
        name, label, placeholder, error, required, helper, options, disabled, defaultValue,
        register: enrichedRegister, extra,
    };
}

export interface field_def_params {
    name?: string,
    required?: boolean,
    disabled?: boolean,
    helper?: string,
    defaultValue?: any,
    defaults?: {[key: string]: any},
    errors?: {[key: string]: any},
    options?: {[key: string]: any},
    label?: string,
    placeholder?: string,
    register?: register,
    field?: boolean,
    [key: string]: any,
}

export default useField