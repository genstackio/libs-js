import Div from './Div';
import Column from './Column';
import { AsWrapper } from '../as';

export function FormFooter({ children, className }: FormFooterProps) {
    if (!children) return null;

    return (
        <Column center className={className}>
            <Div center flex inline mt={'md'}>
                {children}
            </Div>
        </Column>
    );
}

export type FormFooterProps = AsWrapper;

// noinspection JSUnusedGlobalSymbols
export default FormFooter;
