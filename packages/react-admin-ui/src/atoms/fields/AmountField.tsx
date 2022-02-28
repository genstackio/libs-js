import NumberField, {NumberFieldProps} from "./NumberField";

export function AmountField(props: AmountFieldProps) {
    return <NumberField kind={'amount'} {...props} />;
}

export interface AmountFieldProps extends NumberFieldProps {
}

export default AmountField;
