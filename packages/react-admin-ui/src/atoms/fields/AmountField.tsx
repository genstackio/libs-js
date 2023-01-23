import NumberField, { NumberFieldProps } from './NumberField';

export function AmountField(props: AmountFieldProps) {
    return <NumberField kind={'amount'} {...props} />;
}

export type AmountFieldProps = NumberFieldProps;

export default AmountField;
