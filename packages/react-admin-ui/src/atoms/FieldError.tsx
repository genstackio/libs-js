import clsx from 'clsx';
import Div from './Div';
import { AsComponent } from '../as';
import { WithCenter, WithError } from '../withs';
import { flag } from '../types';

export function FieldError({ className, error, center }: FieldErrorProps) {
    if (!error) return null;

    return (
        <Div
            flex
            inline
            ml={'xs'}
            mt={'xs'}
            vcenter
            className={clsx('font-medium tracking-wide text-danger text-xs', className, center && 'items-center')}
        >
            {error}
        </Div>
    );
}

export interface FieldErrorProps extends AsComponent, WithError, WithCenter {
    rounded?: flag;
}

// noinspection JSUnusedGlobalSymbols
export default FieldError;
