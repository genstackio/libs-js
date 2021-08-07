import clsx from 'clsx';
import { AsWrapper } from '../as';

export function FieldGroup({ className, children }: FieldGroupProps) {
    return <div className={clsx('flex space-x-4 xs:flex-col xs:space-x-0', className)}>{children || ''}</div>;
}

export type FieldGroupProps = AsWrapper;

export default FieldGroup;
