import UrlField, {UrlFieldProps} from "./UrlField";

export function VimeoUrlField(props: VimeoUrlFieldProps) {
    return <UrlField kind={'vimeoUrl'} {...props} />
}

export interface VimeoUrlFieldProps extends UrlFieldProps {
}

// noinspection JSUnusedGlobalSymbols
export default VimeoUrlField;
