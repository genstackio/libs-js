import DateField, { DateFieldProps } from './DateField';

export function MonthField(props: MonthFieldProps) {
    return <DateField kind={'month'} type={'month'} {...props} />;
}

export type MonthFieldProps = DateFieldProps;

// noinspection JSUnusedGlobalSymbols
export default MonthField;
