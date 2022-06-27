import FileField, {FileFieldProps} from "./FileField";

export function MainVideoFileField(props: MainVideoFileFieldProps) {
    return <FileField kind={'mainVideoFile'} {...props} />;
}

export interface MainVideoFileFieldProps extends FileFieldProps {
}

// noinspection JSUnusedGlobalSymbols
export default MainVideoFileField;
