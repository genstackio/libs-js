import TextField, { TextFieldProps } from './TextField';

export function TypeField(props: TypeFieldProps) {
    return <TextField kind={'type'} {...props} />;
}

export type TypeFieldProps = TextFieldProps;

export default TypeField;
