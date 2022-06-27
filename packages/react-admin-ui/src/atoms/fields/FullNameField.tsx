import TextField, {TextFieldProps} from "./TextField";

export function FullNameField(props: FullNameFieldProps) {
    return <TextField kind={'fullName'} {...props} />
}

export interface FullNameFieldProps extends TextFieldProps {
}

// noinspection JSUnusedGlobalSymbols
export default FullNameField;
