import TextField, {TextFieldProps} from "./TextField";

export function StateField(props: StateFieldProps) {
    return <TextField kind={'state'} {...props} />;
}

export interface StateFieldProps extends TextFieldProps {
}

export default StateField;
