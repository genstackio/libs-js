import TextField, {TextFieldProps} from "./TextField";

export function KeyField(props: KeyFieldProps) {
    return <TextField kind={'key'} {...props} />
}

export interface KeyFieldProps extends TextFieldProps {
}

// noinspection JSUnusedGlobalSymbols
export default KeyField;
