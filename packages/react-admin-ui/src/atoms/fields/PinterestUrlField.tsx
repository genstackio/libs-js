import UrlField, {UrlFieldProps} from "./UrlField";

export function PinterestUrlField(props: PinterestUrlFieldProps) {
    return <UrlField kind={'pinterestUrl'} {...props} />
}

export interface PinterestUrlFieldProps extends UrlFieldProps {
}

// noinspection JSUnusedGlobalSymbols
export default PinterestUrlField;
