import TextField, { TextFieldProps } from './TextField';

export function DataField(props: DataFieldProps) {
    return <TextField kind={'data'} {...props} />;
}

export type DataFieldProps = TextFieldProps;

export default DataField;
