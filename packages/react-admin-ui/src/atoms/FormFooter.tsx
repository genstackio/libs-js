import { children, class_name } from '../types';
import clsx from 'clsx';

export function FormFooter({ className, children }: FormFooterProps) {
    if (!children) return null;
    return (
        <div className={clsx('w-full flex flex-col justify-center', className)}>
            <div className={'mt-4 flex flex-inline items-center justify-center'}>{children}</div>
        </div>
    );
}

export interface FormFooterProps {
    className?: class_name;
    children?: children;
}

export default FormFooter;
