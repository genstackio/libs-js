import TextField, { TextFieldProps } from './TextField';

export function DateField(props: DateFieldProps) {
    if (props.defaultValues && props.defaultValues['date']) {
        props.defaultValues['date'] = new Date(props.defaultValues['date']).toISOString().substring(0, 10);
    }
    return <TextField kind={'date'} type={'date'} {...props} />;
}

export type DateFieldProps = TextFieldProps;

// noinspection JSUnusedGlobalSymbols
export default DateField;
