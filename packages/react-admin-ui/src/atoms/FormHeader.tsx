import Div from './Div';
import Column from './Column';
import { AsWrapper } from '../as';

export function FormHeader({ children, className }: FormHeaderProps) {
    if (!children) return null;

    return (
        <Column center className={className}>
            <Div center flex inline mt={'md'}>
                {children}
            </Div>
        </Column>
    );
}

export type FormHeaderProps = AsWrapper;

// noinspection JSUnusedGlobalSymbols
export default FormHeader;
