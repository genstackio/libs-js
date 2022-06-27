import UrlField, {UrlFieldProps} from "./UrlField";

export function ErrorCallbackUrlField(props: ErrorCallbackUrlFieldProps) {
    return <UrlField kind={'errorCallbackUrl'} {...props} />
}

export interface ErrorCallbackUrlFieldProps extends UrlFieldProps {
}

// noinspection JSUnusedGlobalSymbols
export default ErrorCallbackUrlField;
