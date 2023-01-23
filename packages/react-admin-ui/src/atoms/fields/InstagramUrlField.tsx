import UrlField, { UrlFieldProps } from './UrlField';

export function InstagramUrlField(props: InstagramUrlFieldProps) {
    return <UrlField kind={'instagramUrl'} {...props} />;
}

export type InstagramUrlFieldProps = UrlFieldProps;

// noinspection JSUnusedGlobalSymbols
export default InstagramUrlField;
