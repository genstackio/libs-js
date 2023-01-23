import FileField, { FileFieldProps } from './FileField';

export function DataFileField(props: DataFileFieldProps) {
    return <FileField kind={'dataFile'} {...props} />;
}

export type DataFileFieldProps = FileFieldProps;

// noinspection JSUnusedGlobalSymbols
export default DataFileField;
