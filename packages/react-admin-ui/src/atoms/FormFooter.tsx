import clsx from 'clsx';
import { WithChildren, WithClassName } from '../withs';

export function FormFooter({ className, children }: FormFooterProps) {
    return children ? (
        <div className={clsx('w-full flex flex-col justify-center', className)}>
            <div className={'mt-4 flex flex-inline items-center justify-center'}>{children}</div>
        </div>
    ) : null;
}

export interface FormFooterProps extends WithClassName, WithChildren {}

export default FormFooter;
