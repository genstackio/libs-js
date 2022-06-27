import UrlField, {UrlFieldProps} from "./UrlField";

export function TiktokUrlField(props: TiktokUrlFieldProps) {
    return <UrlField kind={'tiktokUrl'} {...props} />
}

export interface TiktokUrlFieldProps extends UrlFieldProps {
}

// noinspection JSUnusedGlobalSymbols
export default TiktokUrlField;
