import UrlField, {UrlFieldProps} from "./UrlField";

export function YoutubeUrlField(props: YoutubeUrlFieldProps) {
    return <UrlField kind={'youtubeUrl'} {...props} />
}

export interface YoutubeUrlFieldProps extends UrlFieldProps {
}

// noinspection JSUnusedGlobalSymbols
export default YoutubeUrlField;
