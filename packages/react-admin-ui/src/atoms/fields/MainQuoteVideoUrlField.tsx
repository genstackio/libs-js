import UrlField, {UrlFieldProps} from "./UrlField";

export function MainQuoteVideoUrlField(props: MainQuoteVideoUrlFieldProps) {
    return <UrlField kind={'mainQuoteVideoUrl'} {...props} />
}

export interface MainQuoteVideoUrlFieldProps extends UrlFieldProps {
}

// noinspection JSUnusedGlobalSymbols
export default MainQuoteVideoUrlField;
