import clsx from 'clsx';
import { class_name } from '../types';

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

export interface FieldHelperProps {
    className?: class_name;
    helper?: string;
}

export default FieldHelper;
