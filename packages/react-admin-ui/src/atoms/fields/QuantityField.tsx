import NumberField, {NumberFieldProps} from "./NumberField";

export function QuantityField(props: QuantityFieldProps) {
    return <NumberField kind={'quantity'} {...props} />;
}

export interface QuantityFieldProps extends NumberFieldProps {
}

export default QuantityField;
