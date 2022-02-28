import TextField, {TextFieldProps} from "./TextField";

export function OverlineField(props: OverlineFieldProps) {
    return <TextField kind={'overline'} {...props} />;
}

export interface OverlineFieldProps extends TextFieldProps {
}

export default OverlineField;
