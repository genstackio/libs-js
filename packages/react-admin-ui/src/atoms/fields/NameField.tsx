import TextField, {TextFieldProps} from "./TextField";

export function NameField(props: NameFieldProps) {
    return (
        <TextField kind={'name'} {...props} />
    );
}

export interface NameFieldProps extends TextFieldProps {}

export default NameField
