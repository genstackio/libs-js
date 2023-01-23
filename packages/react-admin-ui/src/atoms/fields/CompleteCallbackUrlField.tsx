import UrlField, { UrlFieldProps } from './UrlField';

export function CompleteCallbackUrlField(props: CompleteCallbackUrlFieldProps) {
    return <UrlField kind={'completeCallbackUrl'} {...props} />;
}

export type CompleteCallbackUrlFieldProps = UrlFieldProps;

// noinspection JSUnusedGlobalSymbols
export default CompleteCallbackUrlField;
