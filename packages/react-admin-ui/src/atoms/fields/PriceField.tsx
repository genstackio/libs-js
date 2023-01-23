import NumberField, { NumberFieldProps } from './NumberField';

export function PriceField(props: PriceFieldProps) {
    return <NumberField kind={'price'} {...props} />;
}

export type PriceFieldProps = NumberFieldProps;

export default PriceField;
