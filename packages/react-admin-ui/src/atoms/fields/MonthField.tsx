import DateField, { DateFieldProps } from './DateField';

export function MonthField(props: MonthFieldProps) {
    if (props.defaultValues && props.defaultValues['month']) {
        props.defaultValues['month'] = new Date(props.defaultValues['month']).toISOString().substring(0, 7);
    }
    return <DateField kind={'month'} type={'month'} {...props} />;
}

export type MonthFieldProps = DateFieldProps;

// noinspection JSUnusedGlobalSymbols
export default MonthField;
