import clsx from 'clsx';
import { AsWrapper } from '../as';

export function FormHeader({ className, children }: FormHeaderProps) {
    return children ? (
        <div className={clsx('w-full flex flex-col justify-center', className)}>
            <div className={'mt-4 flex flex-inline items-center justify-center'}>{children}</div>
        </div>
    ) : null;
}

export type FormHeaderProps = AsWrapper;

export default FormHeader;
