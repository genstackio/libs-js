import UrlField, {UrlFieldProps} from "./UrlField";

export function RedditUrlField(props: RedditUrlFieldProps) {
    return <UrlField kind={'redditUrl'} {...props} />
}

export interface RedditUrlFieldProps extends UrlFieldProps {
}

// noinspection JSUnusedGlobalSymbols
export default RedditUrlField;
