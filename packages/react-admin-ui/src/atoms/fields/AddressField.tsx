import TextField, { TextFieldProps } from './TextField';

export function AddressField(props: AddressFieldProps) {
    return <TextField kind={'address'} {...props} />;
}

export type AddressFieldProps = TextFieldProps;

// noinspection JSUnusedGlobalSymbols
export default AddressField;
