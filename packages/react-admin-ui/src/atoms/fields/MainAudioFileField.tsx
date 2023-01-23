import FileField, { FileFieldProps } from './FileField';

export function MainAudioFileField(props: MainAudioFileFieldProps) {
    return <FileField kind={'mainAudioFile'} {...props} />;
}

export type MainAudioFileFieldProps = FileFieldProps;

// noinspection JSUnusedGlobalSymbols
export default MainAudioFileField;
