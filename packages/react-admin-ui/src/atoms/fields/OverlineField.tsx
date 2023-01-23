import TextField, { TextFieldProps } from './TextField';

export function OverlineField(props: OverlineFieldProps) {
    return <TextField kind={'overline'} {...props} />;
}

export type OverlineFieldProps = TextFieldProps;

export default OverlineField;
