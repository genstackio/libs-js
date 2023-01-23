import TextField, { TextFieldProps } from './TextField';

export function ComplementField(props: ComplementFieldProps) {
    return <TextField kind={'complement'} {...props} />;
}

export type ComplementFieldProps = TextFieldProps;

export default ComplementField;
