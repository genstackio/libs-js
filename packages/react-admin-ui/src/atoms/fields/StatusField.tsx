import TextField, {TextFieldProps} from "./TextField";

export function StatusField(props: StatusFieldProps) {
    return <TextField kind={'status'} {...props} />;
}

export interface StatusFieldProps extends TextFieldProps {
}

// noinspection JSUnusedGlobalSymbols
export default StatusField;
