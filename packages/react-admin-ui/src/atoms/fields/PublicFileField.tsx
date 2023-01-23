import FileField, { FileFieldProps } from './FileField';

export function PublicFileField(props: PublicFileFieldProps) {
    return <FileField kind={'publicFile'} {...props} />;
}

export type PublicFileFieldProps = FileFieldProps;

// noinspection JSUnusedGlobalSymbols
export default PublicFileField;
