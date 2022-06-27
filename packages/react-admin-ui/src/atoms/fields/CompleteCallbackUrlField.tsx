import UrlField, {UrlFieldProps} from "./UrlField";

export function CompleteCallbackUrlField(props: CompleteCallbackUrlFieldProps) {
    return <UrlField kind={'completeCallbackUrl'} {...props} />
}

export interface CompleteCallbackUrlFieldProps extends UrlFieldProps {
}

// noinspection JSUnusedGlobalSymbols
export default CompleteCallbackUrlField;
