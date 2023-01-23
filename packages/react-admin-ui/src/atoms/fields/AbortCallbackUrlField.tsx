import UrlField, { UrlFieldProps } from './UrlField';

export function AbortCallbackUrlField(props: AbortCallbackUrlFieldProps) {
    return <UrlField kind={'abortCallbackUrl'} {...props} />;
}

export type AbortCallbackUrlFieldProps = UrlFieldProps;

// noinspection JSUnusedGlobalSymbols
export default AbortCallbackUrlField;
