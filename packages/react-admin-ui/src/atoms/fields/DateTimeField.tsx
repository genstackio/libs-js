import DateField, { DateFieldProps } from './DateField';

export function DateTimeField(props: DateTimeFieldProps) {
    if (props.defaultValues && props.defaultValues['dateTime']) {
        props.defaultValues['dateTime'] = new Date(props.defaultValues['dateTime']).toISOString().substring(0, 19);
    }
    return <DateField kind={'dateTime'} type={'datetime-local'} {...props} />;
}

export type DateTimeFieldProps = DateFieldProps;

// noinspection JSUnusedGlobalSymbols
export default DateTimeField;
