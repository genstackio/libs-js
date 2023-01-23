import UrlField, { UrlFieldProps } from './UrlField';

export function WebsiteUrlField(props: WebsiteUrlFieldProps) {
    return <UrlField kind={'websiteUrl'} {...props} />;
}

export type WebsiteUrlFieldProps = UrlFieldProps;

// noinspection JSUnusedGlobalSymbols
export default WebsiteUrlField;
