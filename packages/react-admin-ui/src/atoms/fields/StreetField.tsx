import TextField, { TextFieldProps } from './TextField';

export function StreetField(props: StreetFieldProps) {
    return <TextField kind={'street'} {...props} />;
}

export type StreetFieldProps = TextFieldProps;

export default StreetField;
