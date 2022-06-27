import UrlField, {UrlFieldProps} from "./UrlField";

export function MainVideoUrlField(props: MainVideoUrlFieldProps) {
    return <UrlField kind={'mainVideoUrl'} {...props} />
}

export interface MainVideoUrlFieldProps extends UrlFieldProps {
}

// noinspection JSUnusedGlobalSymbols
export default MainVideoUrlField;
