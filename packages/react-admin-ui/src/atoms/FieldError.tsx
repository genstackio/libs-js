import clsx from 'clsx';
import { WithClassName, WithError } from '../withs';

export function FieldError({ className, error }: FieldErrorProps) {
    if (!error) return null;
    return (
        <span className={clsx('flex items-center font-medium tracking-wide text-danger text-xs mt-1 ml-1', className)}>
            {error}
        </span>
    );
}

export interface FieldErrorProps extends WithClassName, WithError {}

export default FieldError;
