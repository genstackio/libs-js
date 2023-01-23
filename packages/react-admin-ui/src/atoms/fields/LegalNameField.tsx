import TextField, { TextFieldProps } from './TextField';

export function LegalNameField(props: LegalNameFieldProps) {
    return <TextField kind={'legalName'} {...props} />;
}

export type LegalNameFieldProps = TextFieldProps;

// noinspection JSUnusedGlobalSymbols
export default LegalNameField;
