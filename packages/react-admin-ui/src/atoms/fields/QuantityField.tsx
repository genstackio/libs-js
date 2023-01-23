import NumberField, { NumberFieldProps } from './NumberField';

export function QuantityField(props: QuantityFieldProps) {
    return <NumberField kind={'quantity'} {...props} />;
}

export type QuantityFieldProps = NumberFieldProps;

export default QuantityField;
