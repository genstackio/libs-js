import UrlField, { UrlFieldProps } from './UrlField';

export function TwitterUrlField(props: TwitterUrlFieldProps) {
    return <UrlField kind={'twitterUrl'} {...props} />;
}

export type TwitterUrlFieldProps = UrlFieldProps;

// noinspection JSUnusedGlobalSymbols
export default TwitterUrlField;
