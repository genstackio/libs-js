import TextField, {TextFieldProps} from "./TextField";

export function AddressField(props: AddressFieldProps) {
    return (
        <TextField kind={'address'} {...props} />
    );
}

export interface AddressFieldProps extends TextFieldProps {
}

export default AddressField
