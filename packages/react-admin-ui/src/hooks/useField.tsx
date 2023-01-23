import { useCallback, useMemo } from 'react';
import clsx from 'clsx';
import { icon, register, control, rich_text } from '../types';
import { useTranslation } from 'react-i18next';
import Icon from '../atoms/Icon';
import { WithAny, WithDefaultValues, WithLabel, WithOptions } from '../withs';
import { useGetUploadParams } from '@genstackio/react-contexts';

const defaultDefaults = {};

const defaultSetValueAsBoolean = (value: any) => {
    return !!value;
};
// noinspection JSUnusedLocalSymbols
export function useField(
    {
        name,
        className,
        required = false,
        half = false,
        threeOf5 = false,
        twoOf5 = false,
        prepend,
        prependIcon,
        append,
        appendIcon,
        kind,
        disabled = false,
        helper,
        type,
        placeholder,
        errors = undefined,
        defaultValue = undefined,
        defaultValues = undefined,
        options = undefined,
        label,
        /* eslint @typescript-eslint/no-empty-function: 0 */
        register = (name: string, options: any) => {},
        control,
        field,
        variant,
        classes,
        valueAs,
        convertValue,
        deps,
        inputProps,
        fieldsetProps,
        ...extra
    }: field_def_params,
    defaults: { name?: string; kind?: string } = defaultDefaults,
) {
    const { t } = useTranslation();
    type = (type || 'text') as string;
    kind = (kind || defaults.kind || type) as string;
    name = (name || defaults.name || kind) as string;
    options = useMemo(
        () => ({
            ...(options || {}),
            required,
        }),
        [options, required],
    );
    label = label
        ? 'string' === typeof label
            ? t(label)
            : label
        : t([`field_${name.toLowerCase()}_label`, `field_${kind.toLowerCase()}_label`, '']);
    helper = helper
        ? 'string' === typeof helper
            ? t(helper)
            : helper
        : t([`field_${name.toLowerCase()}_helper`, `field_${kind.toLowerCase()}_helper`, '']);
    placeholder = placeholder
        ? 'string' === typeof placeholder
            ? t(placeholder)
            : placeholder
        : t([`field_${name.toLowerCase()}_placeholder`, `field_${kind.toLowerCase()}_placeholder`, '']);

    const errorData = errors ? errors[name] || errors['all'] : undefined;
    const error = errorData ? errorData.message || t(['constraints_required']) : undefined;
    const enrichedRegister = useCallback(
        (extraOptions = {}) => {
            const computedExtraOptions = {};
            switch (valueAs) {
                case 'string':
                    break;
                case 'number':
                    computedExtraOptions['valueAsNumber'] = true;
                    break;
                case 'date':
                    computedExtraOptions['valueAsDate'] = true;
                    break;
                case 'boolean':
                    computedExtraOptions['setValueAs'] = defaultSetValueAsBoolean;
                    break;
                default:
                    if ('function' === typeof valueAs) {
                        computedExtraOptions['setValueAs'] = valueAs;
                        break;
                    }
                    break;
            }
            if (deps) {
                computedExtraOptions['deps'] = deps;
            }
            return register(name, { ...options, ...computedExtraOptions, ...extraOptions });
        },
        [register, valueAs, deps, name, options],
    );
    defaultValue = undefined !== defaultValue ? defaultValue : defaultValues ? defaultValues[name] : undefined;

    convertValue && (defaultValue = convertValue(defaultValue));
    prependIcon = prependIcon ? <Icon icon={prependIcon} /> : undefined;
    appendIcon = appendIcon ? <Icon icon={appendIcon} /> : undefined;

    className =
        clsx(className, half && 'w-full sm:w-1/2', threeOf5 && 'w-full sm:w-3/5', twoOf5 && 'w-full sm:w-2/5') ||
        undefined;

    const getUploadParams = useGetUploadParams({ defaultValues, name, type: kind });

    return useMemo<{
        control: any;
        className?: string;
        name: string;
        label?: any;
        placeholder?: any;
        error: any;
        required?: boolean;
        helper?: any;
        options?: any;
        disabled?: boolean;
        defaultValue?: any;
        kind?: string;
        register: Function;
        variant?: any;
        extra?: any;
        type?: any;
        getUploadParams?: Function;
        prepend?: any;
        append?: any;
        classes?: any;
        inputProps?: Function;
        fieldsetProps?: Function;
    }>(
        () => ({
            control,
            className,
            name: name!,
            label,
            placeholder,
            error,
            required,
            helper,
            options,
            disabled,
            defaultValue,
            kind,
            register: enrichedRegister,
            variant,
            extra,
            type,
            getUploadParams,
            prepend:
                prepend && prependIcon ? (
                    <>
                        {prepend}
                        {prependIcon}
                    </>
                ) : prepend ? (
                    prepend
                ) : prependIcon ? (
                    prependIcon
                ) : undefined,
            append:
                append && appendIcon ? (
                    <>
                        {append}
                        {appendIcon}
                    </>
                ) : append ? (
                    append
                ) : appendIcon ? (
                    appendIcon
                ) : undefined,
            classes,
            inputProps,
            fieldsetProps,
        }),
        [
            control,
            className,
            name,
            label,
            placeholder,
            error,
            required,
            helper,
            options,
            disabled,
            defaultValue,
            kind,
            enrichedRegister,
            variant,
            extra,
            type,
            getUploadParams,
            prepend,
            prependIcon,
            append,
            appendIcon,
            classes,
            inputProps,
        ],
    );
}

export interface field_def_params extends WithLabel, WithAny, WithOptions, WithDefaultValues {
    name?: string;
    type?: string;
    prepend?: rich_text;
    prependIcon?: icon;
    append?: rich_text;
    appendIcon?: icon;
    required?: boolean;
    disabled?: boolean;
    helper?: rich_text;
    defaultValue?: any;
    errors?: { [key: string]: any };
    placeholder?: rich_text;
    register?: register;
    control?: control;
    field?: boolean;
    classes?: any;
    valueAs?: 'string' | 'number' | 'date' | 'boolean' | ((value: any) => any);
    convertValue?: Function;
    deps?: string | string[];
    inputProps?: Function;
    fieldsetProps?: Function;
}

export default useField;
