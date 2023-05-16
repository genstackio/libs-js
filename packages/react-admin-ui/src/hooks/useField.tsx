import { useCallback, useMemo } from 'react';
import clsx from 'clsx';
import { icon, register, control, rich_text } from '../types';
import { useTranslation } from 'react-i18next';
import Icon from '../atoms/Icon';
import { WithAny, WithDefaultValues, WithLabel, WithOptions } from '../withs';
import { useGetUploadParams, useValidatorsContext } from '@genstackio/react-contexts';
import objectProperty from '../utils/objectProperty';
import * as baseValidators from '../validators';
import { useFormContext } from 'react-hook-form';

const defaultDefaults = {};
const defaultValidators = {};

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
        subName,
        maxLength,
        minLength,
        max,
        min,
        pattern,
        validators = defaultValidators,
        ...extra
    }: field_def_params,
    defaults: { name?: string; kind?: string } = defaultDefaults,
) {
    const { t } = useTranslation();
    const customValidators = useValidatorsContext();
    const { formState = {} }: {formState?: any} = useFormContext() || {};
    const contextErrors = formState.errors || {};
    const finalValidators = useMemo(() => ({ ...baseValidators, ...customValidators }), [customValidators]);
    type = (type || 'text') as string;
    kind = (kind || defaults.kind || type) as string;
    name = (name || defaults.name || kind) as string;

    name = `${name}${subName ? '.' : ''}${subName || ''}`;
    const fullKind = `${kind}${subName ? '.' : ''}${subName || ''}`;

    const i18nKeys = [
        name.toLowerCase().replace(/\./g, '_'),
        fullKind.toLowerCase().replace(/\./g, '_'),
        kind.toLowerCase().replace(/\./g, '_'),
    ];

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
        : t([...i18nKeys.map((x) => `field_${x}_label`), '']);
    helper = helper
        ? 'string' === typeof helper
            ? t(helper)
            : helper
        : t([...i18nKeys.map((x) => `field_${x}_helper`), '']);
    placeholder = placeholder
        ? 'string' === typeof placeholder
            ? t(placeholder)
            : placeholder
        : t([...i18nKeys.map((x) => `field_${x}_placeholder`), '']);

    const allErrors = { ...contextErrors, ...(errors || {}) };
    const errorData = allErrors[name] || allErrors['all'] || undefined;
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
            const builtValidators = buildValidators(validators, finalValidators);

            return register(name, {
                ...options,
                ...(undefined !== maxLength ? { maxLength } : {}),
                ...(undefined !== minLength ? { minLength } : {}),
                ...(undefined !== max ? { max } : {}),
                ...(undefined !== min ? { min } : {}),
                ...(undefined !== pattern
                    ? {
                          pattern:
                              'string' === typeof pattern
                                  ? new RegExp(pattern)
                                  : 'object' === typeof pattern
                                  ? {
                                        ...pattern,
                                        value:
                                            'string' === typeof pattern['value']
                                                ? new RegExp(pattern['value'])
                                                : pattern['value'],
                                    }
                                  : pattern,
                      }
                    : {}),
                ...(undefined !== builtValidators ? { validate: builtValidators } : {}),
                ...computedExtraOptions,
                ...extraOptions,
            });
        },
        [register, valueAs, deps, name, options, maxLength, minLength, min, max, pattern, finalValidators],
    );
    defaultValue =
        undefined !== defaultValue ? defaultValue : defaultValues ? objectProperty(defaultValues, name) : undefined;

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

function buildValidators(validators, allValidators) {
    if (!validators) return undefined;
    if ('function' === typeof validators) return validators;
    if ('object' !== typeof validators) return undefined;
    return Object.entries(validators).reduce((acc, [k, v]) => {
        if ('function' !== typeof v) v = buildValidatorFunction(v, k, allValidators);
        acc[k] = v;
        return acc;
    }, {} as Record<string, any>);
}
function buildValidatorFunction(v: any, _: any, allValidators: any) {
    if ('string' === v) v = { type: v };
    const { type, ...config } = v;
    const val = allValidators[type || ''] || undefined;
    if (!val) return undefined;
    const { test, check, message } = val(config);
    return async (value: any, allValues: any) => {
        let status = true;
        let m: string | undefined = 'invalid';
        if (test) {
            status = test(value, allValues);
            if (!status) {
                m = message?.(value, allValues);
            }
        }
        if (check) {
            try {
                check(value, allValues);
            } catch (e: any) {
                status = false;
                m = e.message;
            }
        }

        return status || m;
    };
}
export interface field_def_params extends WithLabel, WithAny, WithOptions, WithDefaultValues {
    name?: string;
    subName?: string;
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
    maxLength?: number | { value: number; message: string };
    minLength?: number | { value: number; message: string };
    max?: number | { value: number; message: string };
    min?: number | { value: number; message: string };
    pattern?: string | RegExp | { value: string | RegExp; message: string };
}

export default useField;
