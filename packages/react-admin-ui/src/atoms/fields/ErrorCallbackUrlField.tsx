import UrlField, { UrlFieldProps } from './UrlField';

export function ErrorCallbackUrlField(props: ErrorCallbackUrlFieldProps) {
    return <UrlField kind={'errorCallbackUrl'} {...props} />;
}

export type ErrorCallbackUrlFieldProps = UrlFieldProps;

// noinspection JSUnusedGlobalSymbols
export default ErrorCallbackUrlField;
