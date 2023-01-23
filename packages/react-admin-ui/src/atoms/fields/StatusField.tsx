import TextField, { TextFieldProps } from './TextField';

export function StatusField(props: StatusFieldProps) {
    return <TextField kind={'status'} {...props} />;
}

export type StatusFieldProps = TextFieldProps;

// noinspection JSUnusedGlobalSymbols
export default StatusField;
