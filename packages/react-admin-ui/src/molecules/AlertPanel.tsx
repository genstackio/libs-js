import {ReactNode} from 'react';
import {Alert} from "../atoms";

export function AlertPanel({children, title, ...props}: AlertPanelProps) {
    return (
        <Alert {...props}>
            {title && <div className={'text-2xl'}>{title}</div>}
            {title && <hr className={'my-4'} />}
            {children || ''}
        </Alert>
    );
}

export interface AlertPanelProps {
    children?: ReactNode,
    title?: string,
}

export default AlertPanel