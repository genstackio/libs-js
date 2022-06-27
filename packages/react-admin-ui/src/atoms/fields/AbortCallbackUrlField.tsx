import UrlField, {UrlFieldProps} from "./UrlField";

export function AbortCallbackUrlField(props: AbortCallbackUrlFieldProps) {
    return <UrlField kind={'abortCallbackUrl'} {...props} />
}

export interface AbortCallbackUrlFieldProps extends UrlFieldProps {
}

// noinspection JSUnusedGlobalSymbols
export default AbortCallbackUrlField;
