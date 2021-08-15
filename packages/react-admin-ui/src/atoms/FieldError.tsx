import clsx from 'clsx';
import Div from './Div';
import { AsComponent } from '../as';
import { WithError } from '../withs';

export function FieldError({ className, error }: FieldErrorProps) {
    if (!error) return null;

    return (
        <Div
            flex
            inline
            ml={'xs'}
            mt={'xs'}
            vcenter
            className={clsx('font-medium tracking-wide text-danger text-xs', className)}
        >
            {error}
        </Div>
    );
}

export interface FieldErrorProps extends AsComponent, WithError {}

// noinspection JSUnusedGlobalSymbols
export default FieldError;
