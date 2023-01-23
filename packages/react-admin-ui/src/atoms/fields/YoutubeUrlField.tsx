import UrlField, { UrlFieldProps } from './UrlField';

export function YoutubeUrlField(props: YoutubeUrlFieldProps) {
    return <UrlField kind={'youtubeUrl'} {...props} />;
}

export type YoutubeUrlFieldProps = UrlFieldProps;

// noinspection JSUnusedGlobalSymbols
export default YoutubeUrlField;
