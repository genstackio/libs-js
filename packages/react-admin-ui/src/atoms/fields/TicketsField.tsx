import NumberField, {NumberFieldProps} from "./NumberField";

export function TicketsField(props: TicketsFieldProps) {
    return <NumberField kind={'tickets'} {...props} />;
}

export interface TicketsFieldProps extends NumberFieldProps {
}

export default TicketsField;
