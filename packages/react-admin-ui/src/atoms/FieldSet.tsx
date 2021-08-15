import FieldHelper from './FieldHelper';
import FieldLabel from './FieldLabel';
import FieldError from './FieldError';
import Div from './Div';
import { AsWrapper } from '../as';
import { WithError, WithHelper, WithLabel, WithName, WithOptions } from '../withs';

export function FieldSet({ children, className, error, helper, label, name, options }: FieldSetProps) {
    return (
        <Div mb={'sm'} className={className}>
            <Div className={'focus-within:font-bold'}>
                <FieldLabel label={label} name={name} options={options} />
                <Div>{children}</Div>
                <FieldError error={error} />
                <FieldHelper helper={helper} />
            </Div>
        </Div>
    );
}

export interface FieldSetProps extends AsWrapper, WithLabel, Required<WithName>, WithHelper, WithError, WithOptions {}

// noinspection JSUnusedGlobalSymbols
export default FieldSet;
