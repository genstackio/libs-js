import TextField, { TextFieldProps } from './TextField';

export function FullNameField(props: FullNameFieldProps) {
    return <TextField kind={'fullName'} {...props} />;
}

export type FullNameFieldProps = TextFieldProps;

// noinspection JSUnusedGlobalSymbols
export default FullNameField;
