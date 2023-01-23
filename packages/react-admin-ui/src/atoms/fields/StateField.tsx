import TextField, { TextFieldProps } from './TextField';

export function StateField(props: StateFieldProps) {
    return <TextField kind={'state'} {...props} />;
}

export type StateFieldProps = TextFieldProps;

export default StateField;
