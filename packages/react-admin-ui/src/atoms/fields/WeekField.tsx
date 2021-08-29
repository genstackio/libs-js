import { TextField, TextFieldProps } from './TextField';

export function WeekField({ kind = 'week', type = 'week', ...props }: WeekFieldProps) {
    return <TextField kind={kind} type={type} {...props} />;
}

export type WeekFieldProps = TextFieldProps;

// noinspection JSUnusedGlobalSymbols
export default WeekField;
