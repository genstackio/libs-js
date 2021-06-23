import DateField, {DateFieldProps} from './DateField';

export function BirthDateField(props: BirthDateFieldProps) {
    return (
        <DateField kind={'birthDate'} {...props} />
    );
}

export interface BirthDateFieldProps extends DateFieldProps {
}

export default BirthDateField
