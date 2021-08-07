import clsx from 'clsx';
import FieldHelper from './FieldHelper';
import FieldLabel from './FieldLabel';
import FieldError from './FieldError';
import { WithError, WithHelper, WithLabel, WithName, WithOptions } from '../withs';
import { AsWrapper } from '../as';

export function FieldSet({ className, name, label, options, children, error, helper }: FieldSetProps) {
    return (
        <div className={clsx('mb-2', className)}>
            <div className={'focus-within:font-bold'}>
                <FieldLabel name={name} label={label} options={options} />
                {children || ''}
                <FieldError error={error} />
                <FieldHelper helper={helper} />
            </div>
        </div>
    );
}

export interface FieldSetProps extends AsWrapper, WithLabel, Required<WithName>, WithHelper, WithError, WithOptions {}

export default FieldSet;
