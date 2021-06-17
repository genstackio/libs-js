import TextField, {TextFieldProps} from "./TextField";

export function AddressField(props: AddressFieldProps) {
    return (
        <TextField name={'address'} {...props} />
    );
}

export interface AddressFieldProps extends TextFieldProps {
}

export default AddressField