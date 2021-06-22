import {useMemo} from "react";
import {register} from "../types";
import {useTranslation} from "react-i18next";

// noinspection JSUnusedLocalSymbols
export function useField({name, required = false, kind, disabled = false, helper, placeholder, errors = {}, defaultValue = undefined, defaultValues = {}, options = {}, label, register = (name: string, options: any) => {}, field, ...extra}: field_def_params, defaults: {name?: string, kind?: string} = {}) {
    const {t} = useTranslation();
    kind = (kind || defaults.kind || 'text') as string;
    name = (name || defaults.name || kind) as string;
    options = useMemo(() => ({
        ...options,
        required,
    }), [options, required]);
    label = label ? t(label) : t([`field_${name.toLowerCase()}_label`, `field_${kind.toLowerCase()}_label`, ''])
    helper = helper ? t(helper) : t([`field_${name.toLowerCase()}_helper`, `field_${kind.toLowerCase()}_helper`, ''])
    placeholder = placeholder ? t(placeholder) : t([`field_${name.toLowerCase()}_placeholder`, `field_${kind.toLowerCase()}_placeholder`, '']);

    const errorData = errors[name] || errors['all'];
    const error = errorData ? (errorData.message || t(['constraints_required'])) : undefined;
    const enrichedRegister = (extraOptions = {}) => register(name, {...options, ...extraOptions});
    defaultValue = undefined !== defaultValue ? defaultValue : defaultValues[name];

    return {
        name, label, placeholder, error, required, helper, options, disabled, defaultValue, kind,
        register: enrichedRegister, extra,
    };
}

export interface field_def_params {
    name?: string,
    required?: boolean,
    disabled?: boolean,
    helper?: string,
    defaultValue?: any,
    defaultValues?: {[key: string]: any},
    errors?: {[key: string]: any},
    options?: {[key: string]: any},
    label?: string,
    placeholder?: string,
    register?: register,
    field?: boolean,
    [key: string]: any,
}

export default useField
