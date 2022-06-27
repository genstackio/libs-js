import UrlField, {UrlFieldProps} from "./UrlField";

export function SnapchatUrlField(props: SnapchatUrlFieldProps) {
    return <UrlField kind={'snapchatUrl'} {...props} />
}

export interface SnapchatUrlFieldProps extends UrlFieldProps {
}

// noinspection JSUnusedGlobalSymbols
export default SnapchatUrlField;
