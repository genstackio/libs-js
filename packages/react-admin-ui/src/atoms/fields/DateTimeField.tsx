import DateField, { DateFieldProps } from './DateField';

export function DateTimeField(props: DateTimeFieldProps) {
    return <DateField kind={'dateTime'} type={'datetime-local'} {...props} />;
}

export type DateTimeFieldProps = DateFieldProps;

export default DateTimeField;
