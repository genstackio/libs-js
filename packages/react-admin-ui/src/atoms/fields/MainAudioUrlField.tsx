import UrlField, {UrlFieldProps} from "./UrlField";

export function MainAudioUrlField(props: MainAudioUrlFieldProps) {
    return <UrlField kind={'mainAudioUrl'} {...props} />
}

export interface MainAudioUrlFieldProps extends UrlFieldProps {
}

// noinspection JSUnusedGlobalSymbols
export default MainAudioUrlField;
