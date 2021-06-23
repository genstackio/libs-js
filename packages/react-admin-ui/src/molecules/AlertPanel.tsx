import {Alert, AlertProps} from "../atoms";
import {rich_text} from "../types";

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

export interface AlertPanelProps extends AlertProps {
    title?: rich_text,
}

export default AlertPanel
