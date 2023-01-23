import UrlField, { UrlFieldProps } from './UrlField';

export function TumblrUrlField(props: TumblrUrlFieldProps) {
    return <UrlField kind={'tumblrUrl'} {...props} />;
}

export type TumblrUrlFieldProps = UrlFieldProps;

// noinspection JSUnusedGlobalSymbols
export default TumblrUrlField;
