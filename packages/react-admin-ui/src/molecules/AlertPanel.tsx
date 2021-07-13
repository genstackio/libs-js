import Alert, { AlertProps } from '../atoms/Alert';
import { WithTitle } from '../withs';

export function AlertPanel({ children, title, ...props }: AlertPanelProps) {
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

export interface AlertPanelProps extends AlertProps, WithTitle {}

export default AlertPanel;
