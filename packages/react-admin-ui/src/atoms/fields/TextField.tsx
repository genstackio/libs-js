import { useMemo } from 'react';
import clsx from 'clsx';
import Div from '../Div';
import Column from '../Column';
import FieldSet from '../FieldSet';
import useField from '../../hooks/useField';
import { flag, icon, rich_text } from '../../types';
import { fieldVariantClass } from '../../mappings/field-variants';
import { AsTextField } from '../../as';

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
        classes,
    } = useField(props);
    const ctx = useMemo(() => ({ variant, prepend: !!prepend, append: !!append }), [variant, prepend, append]);
    return (
        <FieldSet
            error={error}
            helper={helper}
            label={label}
            name={name}
            options={options}
            className={className}
            classes={classes}
        >
            <Div
                b={'xs'}
                flex
                full
                className={clsx(
                    'text-sm sm:text-base',
                    fieldVariantClass({ ...ctx, type: 'container' }),
                    error && 'border-danger ring-red-300',
                    classes?.container,
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
                <input
                    className={clsx(
                        'z-20 text-sm sm:text-base w-full placeholder-disabled focus:bg-clear ' +
                            'focus:border-indigo-400 focus:outline-none py-2 pr-2 pl-2 focus:ring-4',
                        fieldVariantClass({ ...ctx, type: 'input' }),
                        error && 'border border-danger focus:border-danger ring-red-300',
                        classes?.input,
                    )}
                    defaultValue={defaultValue}
                    disabled={disabled}
                    name={name}
                    placeholder={placeholder}
                    type={type}
                    required={required}
                    {...(type === 'password' ? { autoComplete: 'new-password' } : {})}
                    {...register()}
                    {...extra}
                />
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
}

// noinspection JSUnusedGlobalSymbols
export default TextField;
