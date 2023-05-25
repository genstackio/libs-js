import clsx from 'clsx';
import Div from './Div';
import { AsComponent } from '../as';
import { WithCenter, WithHelper } from '../withs';
import { flag } from '../types';

export function FieldHelper({ className, helper, center }: FieldHelperProps) {
    if (!helper) return null;

    return (
        <Div
            flex
            inline
            ml={'xs'}
            mt={'xs'}
            vcenter
            className={clsx('font-medium tracking-wide text-xs text-disabled', className, center && 'items-center')}
        >
            {helper}
        </Div>
    );
}

export interface FieldHelperProps extends AsComponent, WithHelper, WithCenter {
    rounded?: flag;
}

// noinspection JSUnusedGlobalSymbols
export default FieldHelper;
