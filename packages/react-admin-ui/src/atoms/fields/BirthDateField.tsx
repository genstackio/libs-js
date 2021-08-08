import DateField, { DateFieldProps } from './DateField';

export function BirthDateField(props: BirthDateFieldProps) {
    return <DateField kind={'birthDate'} {...props} />;
}

export type BirthDateFieldProps = DateFieldProps;

// noinspection JSUnusedGlobalSymbols
export default BirthDateField;
