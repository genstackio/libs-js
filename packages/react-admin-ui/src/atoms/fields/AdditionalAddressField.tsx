import TextField, {TextFieldProps} from "./TextField";

export function AdditionalAddressField(props: AdditionalAddressFieldProps) {
    return (
        <TextField name={'additionalAddress'} {...props} />
    );
}

export interface AdditionalAddressFieldProps extends TextFieldProps {
}

export default AdditionalAddressField