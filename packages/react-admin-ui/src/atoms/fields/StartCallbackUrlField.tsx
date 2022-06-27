import UrlField, {UrlFieldProps} from "./UrlField";

export function StartCallbackUrlField(props: StartCallbackUrlFieldProps) {
    return <UrlField kind={'startCallbackUrl'} {...props} />
}

export interface StartCallbackUrlFieldProps extends UrlFieldProps {
}

// noinspection JSUnusedGlobalSymbols
export default StartCallbackUrlField;
