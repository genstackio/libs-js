import clsx from 'clsx';
import { WithHelper } from '../withs';
import { AsComponent } from '../as';

export function FieldHelper({ className, helper }: FieldHelperProps) {
    if (!helper) return null;
    return (
        <span
            className={clsx('flex items-center font-medium tracking-wide text-xs mt-1 ml-1 text-disabled', className)}
        >
            {helper}
        </span>
    );
}

export interface FieldHelperProps extends AsComponent, WithHelper {}

// noinspection JSUnusedGlobalSymbols
export default FieldHelper;
