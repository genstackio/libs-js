import FileUploadField, { FileUploadFieldProps } from './FileUploadField';

export function UserFileUploadField(props: UserFileUploadFieldProps) {
    return <FileUploadField maxSizeBytes={5000000} minSizeBytes={1} {...props} />;
}

export type UserFileUploadFieldProps = FileUploadFieldProps;

// noinspection JSUnusedGlobalSymbols
export default UserFileUploadField;
