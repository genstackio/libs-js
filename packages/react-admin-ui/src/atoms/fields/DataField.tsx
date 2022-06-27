import TextField, {TextFieldProps} from "./TextField";

export function DataField(props: DataFieldProps) {
    return <TextField kind={'data'} {...props} />
}

export interface DataFieldProps extends TextFieldProps {
}

export default DataField;
