import Alert, { AlertProps } from '../atoms/Alert';

export function AlertContent(props: AlertContentProps) {
    return <Alert {...props} />;
}

export type AlertContentProps = AlertProps;

export default AlertContent;
