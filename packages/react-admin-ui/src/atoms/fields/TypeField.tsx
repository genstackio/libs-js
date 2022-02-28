import TextField, {TextFieldProps} from "./TextField";

export function TypeField(props: TypeFieldProps) {
    return <TextField kind={'type'} {...props} />
}

export interface TypeFieldProps extends TextFieldProps {
}

export default TypeField;
