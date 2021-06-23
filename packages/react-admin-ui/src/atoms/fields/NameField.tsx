import TextField, { TextFieldProps } from './TextField';

export function NameField(props: NameFieldProps) {
    return <TextField kind={'name'} {...props} />;
}

export type NameFieldProps = TextFieldProps;

export default NameField;
