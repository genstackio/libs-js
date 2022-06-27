import UrlField, {UrlFieldProps} from "./UrlField";

export function MainShortVideoUrlField(props: MainShortVideoUrlFieldProps) {
    return <UrlField kind={'mainShortVideoUrl'} {...props} />
}

export interface MainShortVideoUrlFieldProps extends UrlFieldProps {
}

// noinspection JSUnusedGlobalSymbols
export default MainShortVideoUrlField;
