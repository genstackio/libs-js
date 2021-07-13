import clsx from 'clsx';
import { WithChildren, WithClassName } from '../withs';

export function FieldGroup({ className, children }: FieldGroupProps) {
    return <div className={clsx('flex space-x-4 xs:flex-col xs:space-x-0', className)}>{children || ''}</div>;
}

export interface FieldGroupProps extends WithClassName, WithChildren {}

export default FieldGroup;
