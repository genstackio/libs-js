import UrlField, {UrlFieldProps} from "./UrlField";

export function InstagramUrlField(props: InstagramUrlFieldProps) {
    return <UrlField kind={'instagramUrl'} {...props} />
}

export interface InstagramUrlFieldProps extends UrlFieldProps {
}

// noinspection JSUnusedGlobalSymbols
export default InstagramUrlField;
