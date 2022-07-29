import DateField, { DateFieldProps } from './DateField';

export function BirthDateField(props: BirthDateFieldProps) {
    if (props.defaultValues && props.defaultValues['birthDate']) {
        props.defaultValues['birthDate'] = new Date(props.defaultValues['birthDate']).toISOString().substring(0, 10);
    }
    return <DateField kind={'birthDate'} {...props} />;
}

export type BirthDateFieldProps = DateFieldProps;

// noinspection JSUnusedGlobalSymbols
export default BirthDateField;
