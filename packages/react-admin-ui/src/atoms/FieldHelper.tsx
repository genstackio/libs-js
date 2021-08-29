import clsx from 'clsx';
import Div from './Div';
import { AsComponent } from '../as';
import { WithHelper } from '../withs';

export function FieldHelper({ className, helper }: FieldHelperProps) {
    if (!helper) return null;

    return (
        <Div
            flex
            inline
            ml={'xs'}
            mt={'xs'}
            vcenter
            className={clsx('font-medium tracking-wide text-xs text-disabled', className)}
        >
            {helper}
        </Div>
    );
}

export interface FieldHelperProps extends AsComponent, WithHelper {}

// noinspection JSUnusedGlobalSymbols
export default FieldHelper;
