import clsx from 'clsx';
import FieldSet from '../FieldSet';
import useField from '../../hooks/useField';
import { flag, icon, rich_text } from '../../types';
import { fieldVariantClass } from '../../mappings/field-variants';
import { useMemo } from 'react';
import {
    WithAutoFocus,
    WithClassName,
    WithDefaultValues,
    WithDisabled,
    WithErrors,
    WithField,
    WithHelper,
    WithKind,
    WithLabel,
    WithName,
    WithOnChange,
    WithOptions,
    WithPlaceholder,
    WithRegister,
    WithRequired,
    WithValue,
    WithVariantOfField,
} from '../../withs';

export function TextField(props: TextFieldProps) {
    const {
        className,
        name,
        required,
        label,
        error,
        helper,
        disabled,
        register,
        placeholder,
        options,
        defaultValue,
        type,
        prepend,
        append,
        extra,
        variant,
    } = useField(props);
    const ctx = useMemo(() => ({ variant, prepend: !!prepend, append: !!append }), [variant, prepend, append]);
    return (
        <FieldSet name={name} label={label} options={options} error={error} helper={helper} className={className}>
            <div
                className={clsx(
                    'text-sm sm:text-base w-full border flex',
                    fieldVariantClass({ ...ctx, type: 'container' }),
                    error && 'border border-danger ring-red-300',
                )}
            >
                {prepend && (
                    <div
                        className={clsx(
                            fieldVariantClass({ ...ctx, type: 'prepended' }),
                            'z-10 bg-disabled border-r-2 p-2 flex flex-col',
                        )}
                    >
                        {prepend}
                    </div>
                )}
                <input
                    className={clsx(
                        'z-20 text-sm sm:text-base w-full placeholder-disabled focus:bg-clear ' +
                            'focus:border-indigo-400 focus:outline-none py-2 pr-2 pl-2 focus:ring-4',
                        fieldVariantClass({ ...ctx, type: 'input' }),
                        error && 'border border-danger focus:border-danger ring-red-300',
                    )}
                    placeholder={placeholder}
                    disabled={disabled}
                    type={type}
                    defaultValue={defaultValue}
                    name={name}
                    required={required}
                    {...(type === 'password' ? { autoComplete: 'new-password' } : {})}
                    {...register()}
                    {...extra}
                />
                {append && (
                    <div
                        className={clsx(
                            fieldVariantClass({ ...ctx, type: 'appended' }),
                            'z-10 bg-disabled border-l-2 p-2 flex flex-col',
                        )}
                    >
                        {append}
                    </div>
                )}
            </div>
        </FieldSet>
    );
}

export interface TextFieldProps
    extends WithClassName,
        WithDisabled,
        WithDefaultValues,
        WithLabel,
        WithOnChange,
        WithAutoFocus,
        WithOptions,
        WithRequired,
        WithErrors,
        WithPlaceholder,
        WithName,
        WithValue,
        WithHelper,
        WithField,
        WithRegister,
        WithVariantOfField,
        WithKind {
    type?: string;
    append?: rich_text;
    appendIcon?: icon;
    prepend?: rich_text;
    prependIcon?: icon;
    half?: flag;
    threeOf5?: flag;
    twoOf5?: flag;
}

export default TextField;
