import TextField, { TextFieldProps } from './TextField';

export function KeyField(props: KeyFieldProps) {
    return <TextField kind={'key'} {...props} />;
}

export type KeyFieldProps = TextFieldProps;

// noinspection JSUnusedGlobalSymbols
export default KeyField;
