import { useMemo } from 'react';
import clsx from 'clsx';
import Div from '../Div';
import Column from '../Column';
import FieldSet from '../FieldSet';
import useField from '../../hooks/useField';
import { class_name, flag, icon, rich_text } from '../../types';
import { fieldVariantClass } from '../../mappings/field-variants';
import { AsTextField } from '../../as';

export function TextField({ inline, inputClassName, labelPrefixContent, ...props }: TextFieldProps) {
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
        classes,
        inputProps,
        fieldsetProps,
        labelClassName,
        center,
        rounded,
        labelFormat,
        errorClassName,
        helperClassName,
        translatable,
        generatable,
        translationGeneratable,
        autotranslatable,
        autotranslatableTargetLocale,
    } = useField(props);

    const ctx = useMemo(() => ({ variant, prepend: !!prepend, append: !!append }), [variant, prepend, append]);
    let finalInputProps = {
        className: clsx(
            'z-20 text-base w-full placeholder-disabled focus:bg-clear ' +
                'focus:border-indigo-400 focus:outline-none py-2 pr-2 pl-2 focus:ring-4',
            fieldVariantClass({ ...ctx, type: 'input' }),
            error && 'border border-danger focus:border-danger ring-red-300',
            classes?.input,
            center && 'text-center',
            rounded && 'rounded',
            inputClassName,
        ),
        defaultValue,
        disabled,
        name,
        placeholder,
        type,
        required,
        ...(type === 'password' ? { autoComplete: 'new-password' } : {}),
        ...register(),
        ...extra,
    };
    let finalFieldsetProps = {
        error,
        helper,
        label,
        name,
        options,
        className,
        classes,
        inline,
        labelClassName,
        labelFormat,
        errorClassName,
        helperClassName,
        center,
        translatable,
        generatable,
        translationGeneratable,
        autotranslatable,
        autotranslatableTargetLocale,
        labelPrefixContent,
    };
    inputProps && (finalInputProps = inputProps(finalInputProps));
    fieldsetProps && (finalFieldsetProps = fieldsetProps(finalFieldsetProps));
    return (
        <FieldSet {...finalFieldsetProps}>
            <Div
                b={'xs'}
                flex
                full
                className={clsx(
                    'text-base',
                    fieldVariantClass({ ...ctx, type: 'container' }),
                    error && 'border-danger ring-red-300',
                    classes?.container,
                    rounded && 'rounded',
                )}
            >
                {prepend && (
                    <Column
                        b={'sm-r'}
                        full={false}
                        p={'sm'}
                        className={clsx(fieldVariantClass({ ...ctx, type: 'prepended' }), 'z-10 bg-disabled')}
                    >
                        {prepend}
                    </Column>
                )}
                <input {...finalInputProps} />
                {append && (
                    <Column
                        b={'sm-l'}
                        full={false}
                        p={'sm'}
                        className={clsx(fieldVariantClass({ ...ctx, type: 'appended' }), 'z-10 bg-disabled')}
                    >
                        {append}
                    </Column>
                )}
            </Div>
        </FieldSet>
    );
}

export interface TextFieldProps extends AsTextField {
    type?: string;
    append?: rich_text;
    appendIcon?: icon;
    prepend?: rich_text;
    prependIcon?: icon;
    half?: flag;
    threeOf5?: flag;
    twoOf5?: flag;
    inline?: boolean;
    step?: any;
    inputClassName?: class_name;
}

// noinspection JSUnusedGlobalSymbols
export default TextField;
