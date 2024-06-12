import FieldHelper from './FieldHelper';
import FieldLabel from './FieldLabel';
import FieldError from './FieldError';
import Div from './Div';
import { AsWrapper } from '../as';
import {
    WithCenter,
    WithClasses,
    WithError,
    WithGeneratable,
    WithHelper,
    WithLabel,
    WithName,
    WithOptions,
    WithTranslatable,
    WithTranslationGeneratable,
    WithAutotranslatable,
} from '../withs';
import clsx from 'clsx';
import { class_name, flag } from '../types';
import GeneratableButton from '../molecules/GeneratableButton';
import TranslationGeneratableButton from '../molecules/TranslationGeneratableButton';

export function FieldSet({
    children,
    className,
    error,
    errorClassName,
    helper,
    helperClassName,
    label,
    labelFormat,
    labelClassName,
    center,
    rounded,
    name,
    options,
    classes,
    inline,
    innerClassName,
    innerInnerClassName,
    translatable,
    generatable,
    translationGeneratable,
    autotranslatable,
    autotranslatableTargetLocale,
    translatableType = 'text',
    labelPrefixContent,
}: FieldSetProps) {
    return (
        <Div mb={inline ? undefined : 'sm'} className={clsx(className, classes?.root)}>
            <Div className={clsx('focus-within:font-bold', innerClassName)}>
                {!!inline && (
                    <Div flex vcenter spaced={2}>
                        <Div className={innerInnerClassName}>{children}</Div>
                        <FieldLabel
                            label={label}
                            format={labelFormat}
                            name={name}
                            options={options}
                            className={clsx(
                                classes?.label,
                                'flex-1',
                                labelClassName,
                                center && !translatable && 'inline-block w-full text-center',
                            )}
                        />
                    </Div>
                )}
                {!inline && (
                    <>
                        <FieldLabel
                            label={label}
                            format={labelFormat}
                            name={name}
                            translatable={translatable}
                            translatableType={translatableType}
                            translationGeneratable={translationGeneratable}
                            labelPrefixContent={labelPrefixContent}
                            options={options}
                            className={clsx(
                                classes?.label,
                                labelClassName,
                                center && 'inline-block w-full text-center',
                            )}
                        />
                        <Div
                            className={clsx(
                                (generatable || translationGeneratable || autotranslatable) && 'relative',
                                innerInnerClassName,
                            )}
                        >
                            {children}
                            {generatable && (
                                <GeneratableButton
                                    fieldName={name}
                                    name={
                                        'string' === typeof generatable ? generatable : !generatable ? '' : `.${name}`
                                    }
                                />
                            )}
                            {autotranslatable && (
                                <TranslationGeneratableButton
                                    targetLocale={autotranslatableTargetLocale || ''}
                                    fieldName={name}
                                    name={
                                        'string' === typeof autotranslatable
                                            ? autotranslatable
                                            : !autotranslatable
                                            ? ''
                                            : `.${name}`
                                    }
                                />
                            )}
                        </Div>
                    </>
                )}
                <FieldError
                    error={error}
                    className={clsx(classes?.error, errorClassName)}
                    rounded={rounded}
                    center={center}
                />
                <FieldHelper
                    helper={helper}
                    className={clsx(classes?.helper, helperClassName)}
                    rounded={rounded}
                    center={center}
                />
            </Div>
        </Div>
    );
}

export interface FieldSetProps
    extends AsWrapper,
        WithLabel,
        Required<WithName>,
        WithHelper,
        WithError,
        WithOptions,
        WithCenter,
        WithTranslatable,
        WithGeneratable,
        WithTranslationGeneratable,
        WithAutotranslatable,
        WithClasses {
    inline?: boolean;
    labelFormat?: 'normal' | 'capital' | 'uppercase' | 'lowercase';
    labelClassName?: class_name;
    errorClassName?: class_name;
    helperClassName?: class_name;
    innerClassName?: class_name;
    innerInnerClassName?: class_name;
    rounded?: flag;
    translatableType?: string;
    labelPrefixContent?: any;
}

export default FieldSet;
