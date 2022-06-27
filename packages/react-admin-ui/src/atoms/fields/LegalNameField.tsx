import TextField, {TextFieldProps} from "./TextField";

export function LegalNameField(props: LegalNameFieldProps) {
    return <TextField kind={'legalName'} {...props} />
}

export interface LegalNameFieldProps extends TextFieldProps {
}

// noinspection JSUnusedGlobalSymbols
export default LegalNameField;
