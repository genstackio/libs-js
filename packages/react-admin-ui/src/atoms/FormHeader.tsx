import clsx from 'clsx';
import { children, class_name } from '../types';

export function FormHeader({ className, children }: FormHeaderProps) {
    if (!children) return null;
    return (
        <div className={clsx('w-full flex flex-col justify-center', className)}>
            <div className={'mt-4 flex flex-inline items-center justify-center'}>{children}</div>
        </div>
    );
}

export interface FormHeaderProps {
    className?: class_name;
    children?: children;
}

export default FormHeader;
