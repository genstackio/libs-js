import clsx from 'clsx';
import FieldSet from '../FieldSet';
import useField from '../../hooks/useField';
import { class_name, flag, icon, register, rich_text } from '../../types';
import { fieldVariantClass, field_variant } from '../../mappings/field-variants';
import { useMemo } from 'react';

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
        <FieldSet name={name} label={label} options={options} error={error} helper={helper} className={clsx(className)}>
            <div
                className={clsx(
                    'text-sm sm:text-base w-full border flex',
                    fieldVariantClass({ ...ctx, type: 'container' }),
                    error && 'border border-red-500 ring-red-300',
                )}
            >
                {prepend && (
                    <div
                        className={clsx(
                            fieldVariantClass({ ...ctx, type: 'prepended' }),
                            'z-10 bg-gray-200 border-r-2 p-2 flex flex-col',
                        )}
                    >
                        {prepend}
                    </div>
                )}
                <input
                    className={clsx(
                        'z-20 text-sm sm:text-base w-full placeholder-gray-400 focus:bg-yellow-50 ' +
                            'focus:border-indigo-400 focus:outline-none py-2 pr-2 pl-2 focus:ring-4',
                        fieldVariantClass({ ...ctx, type: 'input' }),
                        error && 'border border-red-500 focus:border-red-500 ring-red-300',
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
                            'z-10 bg-gray-200 border-l-2 p-2 flex flex-col',
                        )}
                    >
                        {append}
                    </div>
                )}
            </div>
        </FieldSet>
    );
}

export interface TextFieldProps {
    className?: class_name;
    required?: flag;
    type?: string;
    disabled?: flag;
    errors?: { [key: string]: any };
    defaultValues?: { [key: string]: any };
    label?: string;
    placeholder?: string;
    name?: string;
    onChange?: any;
    autoFocus?: flag;
    value?: any;
    options?: any;
    helper?: string;
    register?: register;
    field?: boolean;
    kind?: string;
    append?: rich_text;
    appendIcon?: icon;
    prepend?: rich_text;
    prependIcon?: icon;
    half?: flag;
    threeOf5?: flag;
    twoOf5?: flag;
    variant?: field_variant;
}

export default TextField;
