import TextField, {TextFieldProps} from "./TextField";

export function AdditionalAddressField(props: AdditionalAddressFieldProps) {
    return (
        <TextField kind={'additionalAddress'} {...props} />
    );
}

export interface AdditionalAddressFieldProps extends TextFieldProps {
}

export default AdditionalAddressField
