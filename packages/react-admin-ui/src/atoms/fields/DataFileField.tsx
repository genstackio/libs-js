import FileField, {FileFieldProps} from "./FileField";

export function DataFileField(props: DataFileFieldProps) {
    return <FileField kind={'dataFile'} {...props} />;
}

export interface DataFileFieldProps extends FileFieldProps {
}

// noinspection JSUnusedGlobalSymbols
export default DataFileField;
