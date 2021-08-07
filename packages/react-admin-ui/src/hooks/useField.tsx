import { useMemo } from 'react';
import clsx from 'clsx';
import { icon, register, control, rich_text } from '../types';
import { useTranslation } from 'react-i18next';
import Icon from '../atoms/Icon';
import { WithAny, WithDefaultValues, WithLabel, WithOptions } from '../withs';

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
        errors = {},
        defaultValue = undefined,
        defaultValues = {},
        options = {},
        label,
        /* eslint @typescript-eslint/no-empty-function: 0 */
        register = (name: string, options: any) => {},
        control,
        field,
        variant,
        ...extra
    }: field_def_params,
    defaults: { name?: string; kind?: string } = {},
) {
    const { t } = useTranslation();
    type = (type || 'text') as string;
    kind = (kind || defaults.kind || type) as string;
    name = (name || defaults.name || kind) as string;
    options = useMemo(
        () => ({
            ...options,
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

    const errorData = errors[name] || errors['all'];
    const error = errorData ? errorData.message || t(['constraints_required']) : undefined;
    const enrichedRegister = (extraOptions = {}) => register(name, { ...options, ...extraOptions });
    defaultValue = undefined !== defaultValue ? defaultValue : defaultValues[name];

    prependIcon = prependIcon ? <Icon icon={prependIcon} /> : undefined;
    appendIcon = appendIcon ? <Icon icon={appendIcon} /> : undefined;

    className =
        clsx(className, half && 'w-1/2 xs:w-full', threeOf5 && 'w-3/5 xs:w-full', twoOf5 && 'w-2/5 xs:w-full') ||
        undefined;

    return {
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
        register: enrichedRegister,
        variant,
        extra,
        type,
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
    };
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
}

export default useField;
