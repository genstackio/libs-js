import FieldHelper from './FieldHelper';
import FieldLabel from './FieldLabel';
import FieldError from './FieldError';
import Div from './Div';
import { AsWrapper } from '../as';
import { WithCenter, WithClasses, WithError, WithHelper, WithLabel, WithName, WithOptions } from '../withs';
import clsx from 'clsx';
import { class_name, flag } from '../types';

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
                                center && 'inline-block w-full text-center',
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
                            options={options}
                            className={clsx(
                                classes?.label,
                                labelClassName,
                                center && 'inline-block w-full text-center',
                            )}
                        />
                        <Div className={innerInnerClassName}>{children}</Div>
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
        WithClasses {
    inline?: boolean;
    labelFormat?: 'normal' | 'capital' | 'uppercase' | 'lowercase';
    labelClassName?: class_name;
    errorClassName?: class_name;
    helperClassName?: class_name;
    innerClassName?: class_name;
    innerInnerClassName?: class_name;
    rounded?: flag;
}

// noinspection JSUnusedGlobalSymbols
export default FieldSet;
