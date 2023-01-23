import DateField, { DateFieldProps } from './DateField';

export function WeekField({ kind = 'week', type = 'week', ...props }: WeekFieldProps) {
    return <DateField kind={kind} type={type} {...props} />;
}

export type WeekFieldProps = DateFieldProps;

// noinspection JSUnusedGlobalSymbols
export default WeekField;
