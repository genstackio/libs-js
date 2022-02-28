import TextField, {TextFieldProps} from "./TextField";

export function ComplementField(props: ComplementFieldProps) {
    return <TextField kind={'complement'} {...props} />;
}

export interface ComplementFieldProps extends TextFieldProps {
}

export default ComplementField;
