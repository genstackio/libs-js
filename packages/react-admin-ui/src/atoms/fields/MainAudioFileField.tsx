import FileField, {FileFieldProps} from "./FileField";

export function MainAudioFileField(props: MainAudioFileFieldProps) {
    return <FileField kind={'mainAudioFile'} {...props} />;
}

export interface MainAudioFileFieldProps extends FileFieldProps {
}

// noinspection JSUnusedGlobalSymbols
export default MainAudioFileField;
