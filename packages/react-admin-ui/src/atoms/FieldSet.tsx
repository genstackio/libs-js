import FieldHelper from './FieldHelper';
import FieldLabel from './FieldLabel';
import FieldError from './FieldError';
import Div from './Div';
import { AsWrapper } from '../as';
import { WithClasses, WithError, WithHelper, WithLabel, WithName, WithOptions } from '../withs';
import clsx from 'clsx';

export function FieldSet({ children, className, error, helper, label, name, options, classes, inline }: FieldSetProps) {
    return (
        <Div mb={inline ? undefined : 'sm'} className={clsx(className, classes?.root)}>
            <Div className={'focus-within:font-bold'}>
                {!!inline && (
                    <Div flex vcenter spaced={2}>
                        <Div>{children}</Div>
                        <FieldLabel label={label} name={name} options={options} className={clsx(classes?.label, 'flex-1')} />
                    </Div>
                )}
                {!inline && (
                    <>
                        <FieldLabel label={label} name={name} options={options} className={classes?.label} />
                        <Div>{children}</Div>
                    </>
                )}
                <FieldError error={error} className={classes?.error} />
                <FieldHelper helper={helper} className={classes?.helper} />
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
}

// noinspection JSUnusedGlobalSymbols
export default FieldSet;
