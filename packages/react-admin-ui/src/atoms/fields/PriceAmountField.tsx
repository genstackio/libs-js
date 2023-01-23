import NumberField, { NumberFieldProps } from './NumberField';

export function PriceAmountField(props: PriceAmountFieldProps) {
    return (
        <NumberField
            kind={'priceAmount'}
            label={'field_price_amount_label'}
            helper={'field_price_amount_helper'}
            placeholder={'field_price_amount_placeholder'}
            {...props}
        />
    );
}

export type PriceAmountFieldProps = NumberFieldProps;

export default PriceAmountField;
