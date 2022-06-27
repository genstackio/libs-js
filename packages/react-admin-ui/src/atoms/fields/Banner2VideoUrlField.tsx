import UrlField, {UrlFieldProps} from "./UrlField";

export function Banner2VideoUrlField(props: Banner2VideoUrlFieldProps) {
    return <UrlField kind={'banner2VideoUrl'} {...props} />
}

export interface Banner2VideoUrlFieldProps extends UrlFieldProps {
}

// noinspection JSUnusedGlobalSymbols
export default Banner2VideoUrlField;
