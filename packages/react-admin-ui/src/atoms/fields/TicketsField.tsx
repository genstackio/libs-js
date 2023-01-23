import NumberField, { NumberFieldProps } from './NumberField';

export function TicketsField(props: TicketsFieldProps) {
    return <NumberField kind={'tickets'} {...props} />;
}

export type TicketsFieldProps = NumberFieldProps;

export default TicketsField;
