import NumberField, {NumberFieldProps} from "./NumberField";

export function PriceField(props: PriceFieldProps) {
    return <NumberField kind={'price'} {...props} />;
}

export interface PriceFieldProps extends NumberFieldProps {
}

export default PriceField;
