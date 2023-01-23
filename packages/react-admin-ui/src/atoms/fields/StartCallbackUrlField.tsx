import UrlField, { UrlFieldProps } from './UrlField';

export function StartCallbackUrlField(props: StartCallbackUrlFieldProps) {
    return <UrlField kind={'startCallbackUrl'} {...props} />;
}

export type StartCallbackUrlFieldProps = UrlFieldProps;

// noinspection JSUnusedGlobalSymbols
export default StartCallbackUrlField;
