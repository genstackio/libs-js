import clsx from 'clsx';
import { AsWrapper } from '../as';

export function FormFooter({ className, children }: FormFooterProps) {
    return children ? (
        <div className={clsx('w-full flex flex-col justify-center', className)}>
            <div className={'mt-4 flex flex-inline items-center justify-center'}>{children}</div>
        </div>
    ) : null;
}

export type FormFooterProps = AsWrapper;

// noinspection JSUnusedGlobalSymbols
export default FormFooter;
