import clsx from 'clsx';
import { WithError } from '../withs';
import { AsComponent } from '../as';

export function FieldError({ className, error }: FieldErrorProps) {
    return error ? (
        <span className={clsx('flex items-center font-medium tracking-wide text-danger text-xs mt-1 ml-1', className)}>
            {error}
        </span>
    ) : null;
}

export interface FieldErrorProps extends AsComponent, WithError {}

// noinspection JSUnusedGlobalSymbols
export default FieldError;
