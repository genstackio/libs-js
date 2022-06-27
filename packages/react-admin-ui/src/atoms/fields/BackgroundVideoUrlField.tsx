import UrlField, {UrlFieldProps} from "./UrlField";

export function BackgroundVideoUrlField(props: BackgroundVideoUrlFieldProps) {
    return <UrlField kind={'backgroundVideoUrl'} {...props} />
}

export interface BackgroundVideoUrlFieldProps extends UrlFieldProps {
}

// noinspection JSUnusedGlobalSymbols
export default BackgroundVideoUrlField;
