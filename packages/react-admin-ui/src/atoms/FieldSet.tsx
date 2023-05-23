import FieldHelper from './FieldHelper';
import FieldLabel from './FieldLabel';
import FieldError from './FieldError';
import Div from './Div';
import { AsWrapper } from '../as';
import { WithClasses, WithError, WithHelper, WithLabel, WithName, WithOptions } from '../withs';
import clsx from 'clsx';
import { class_name } from '../types';

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
    name,
    options,
    classes,
    inline,
}: FieldSetProps) {
    return (
        <Div mb={inline ? undefined : 'sm'} className={clsx(className, classes?.root)}>
            <Div className={'focus-within:font-bold'}>
                {!!inline && (
                    <Div flex vcenter spaced={2}>
                        <Div>{children}</Div>
                        <FieldLabel
                            label={label}
                            format={labelFormat}
                            name={name}
                            options={options}
                            className={clsx(classes?.label, 'flex-1', labelClassName)}
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
                            className={clsx(classes?.label, labelClassName)}
                        />
                        <Div>{children}</Div>
                    </>
                )}
                <FieldError error={error} className={clsx(classes?.error, errorClassName)} />
                <FieldHelper helper={helper} className={clsx(classes?.helper, helperClassName)} />
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
        WithClasses {
    inline?: boolean;
    labelFormat?: 'normal' | 'capital' | 'uppercase' | 'lowercase';
    labelClassName?: class_name;
    errorClassName?: class_name;
    helperClassName?: class_name;
}

// noinspection JSUnusedGlobalSymbols
export default FieldSet;
