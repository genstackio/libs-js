import {Alert} from "../atoms";
import {children, rich_text} from "../types";

export function AlertPanel({children, title, ...props}: AlertPanelProps) {
    return (
        <Alert {...props}>
            {title && (
                <>
                    <div className={'text-2xl'}>{title}</div>
                    <hr className={'my-4'} />
                </>
            )}
            {children || ''}
        </Alert>
    );
}

export interface AlertPanelProps {
    children?: children,
    title?: rich_text,
}

export default AlertPanel