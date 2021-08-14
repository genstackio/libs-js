import clsx from 'clsx';
import Div from './Div';
import { AsWrapper } from '../as';

export function FormFooter({ className, children }: FormFooterProps) {
    return children ? (
        <Div full flex center className={clsx('flex-col', className)}>
            <div className={'mt-4 flex flex-inline items-center justify-center'}>{children}</div>
        </Div>
    ) : null;
}

export type FormFooterProps = AsWrapper;

// noinspection JSUnusedGlobalSymbols
export default FormFooter;
