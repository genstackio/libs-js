import DateField, { DateFieldProps } from './DateField';

export function DateTimeField(props: DateTimeFieldProps) {
    return <DateField kind={'dateTime'} type={'datetime-local'} {...props} />;
}

export type DateTimeFieldProps = DateFieldProps;

// noinspection JSUnusedGlobalSymbols
export default DateTimeField;
