import UrlField, {UrlFieldProps} from "./UrlField";

export function WebsiteUrlField(props: WebsiteUrlFieldProps) {
    return <UrlField kind={'websiteUrl'} {...props} />
}

export interface WebsiteUrlFieldProps extends UrlFieldProps {
}

// noinspection JSUnusedGlobalSymbols
export default WebsiteUrlField;
