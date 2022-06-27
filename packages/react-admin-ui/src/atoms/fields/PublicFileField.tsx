import FileField, {FileFieldProps} from "./FileField";

export function PublicFileField(props: PublicFileFieldProps) {
    return <FileField kind={'publicFile'} {...props} />;
}

export interface PublicFileFieldProps extends FileFieldProps {
}

// noinspection JSUnusedGlobalSymbols
export default PublicFileField;
