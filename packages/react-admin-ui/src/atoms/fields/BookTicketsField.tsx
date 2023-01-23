import NumberField, { NumberFieldProps } from './NumberField';

export function BookTicketsField(props: BookTicketsFieldProps) {
    return <NumberField kind={'bookTickets'} {...props} />;
}

export type BookTicketsFieldProps = NumberFieldProps;

export default BookTicketsField;
