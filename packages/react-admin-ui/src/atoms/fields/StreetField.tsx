import TextField, {TextFieldProps} from "./TextField";

export function StreetField(props: StreetFieldProps) {
    return <TextField kind={'street'} {...props} />;
}

export interface StreetFieldProps extends TextFieldProps {
}

export default StreetField;
