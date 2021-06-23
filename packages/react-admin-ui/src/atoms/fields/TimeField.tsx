import TextField, { TextFieldProps } from './TextField';

export function TimeField(props: TimeFieldProps) {
    return <TextField kind={'time'} type="time" {...props} />;
}

export type TimeFieldProps = TextFieldProps;

export default TimeField;
