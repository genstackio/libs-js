import clsx from 'clsx';
import FieldHelper from './FieldHelper';
import FieldLabel from './FieldLabel';
import FieldError from './FieldError';
import { WithChildren, WithClassName, WithError, WithHelper, WithLabel, WithName } from '../withs';

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

export interface FieldSetProps extends WithClassName, WithLabel, WithName, WithHelper, WithChildren, WithError {
    options?: any;
}

export default FieldSet;
