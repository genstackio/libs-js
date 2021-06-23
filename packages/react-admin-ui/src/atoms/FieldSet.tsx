import clsx from 'clsx';
import { children, class_name } from '../types';
import FieldHelper from './FieldHelper';
import FieldLabel from './FieldLabel';
import FieldError from './FieldError';

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

export interface FieldSetProps {
    className?: class_name;
    label?: string;
    name: string;
    options?: any;
    helper?: string;
    children?: children;
    error?: any;
}

export default FieldSet;
