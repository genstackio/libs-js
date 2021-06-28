import { children } from '../types';

export function FormHeader({ children }: FormHeaderProps) {
    if (!children) return null;
    return (
        <div className={'w-full flex flex-col justify-center'}>
            <div className={'mt-4 flex flex-inline items-center justify-center'}>{children}</div>
        </div>
    );
}

export interface FormHeaderProps {
    children?: children;
}

export default FormHeader;
