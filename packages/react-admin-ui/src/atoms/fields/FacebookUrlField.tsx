import UrlField, {UrlFieldProps} from "./UrlField";

export function FacebookUrlField(props: FacebookUrlFieldProps) {
    return <UrlField kind={'facebookUrl'} {...props} />
}

export interface FacebookUrlFieldProps extends UrlFieldProps {
}

// noinspection JSUnusedGlobalSymbols
export default FacebookUrlField;
