import TextField, { TextFieldProps } from './TextField';

export function AdditionalAddressField(props: AdditionalAddressFieldProps) {
    return <TextField kind={'additionalAddress'} {...props} />;
}

export type AdditionalAddressFieldProps = TextFieldProps;

export default AdditionalAddressField;
