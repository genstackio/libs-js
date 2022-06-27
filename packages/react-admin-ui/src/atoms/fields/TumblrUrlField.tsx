import UrlField, {UrlFieldProps} from "./UrlField";

export function TumblrUrlField(props: TumblrUrlFieldProps) {
    return <UrlField kind={'tumblrUrl'} {...props} />
}

export interface TumblrUrlFieldProps extends UrlFieldProps {
}

// noinspection JSUnusedGlobalSymbols
export default TumblrUrlField;
