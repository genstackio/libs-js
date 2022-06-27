import CurrencyField, {CurrencyFieldProps} from "./CurrencyField";

export function PriceCurrencyField(props: PriceCurrencyFieldProps) {
    return <CurrencyField kind={'priceCurrency'} label={'field_price_currency_label'} helper={'field_price_currency_helper'} placeholder={'field_price_currency_placeholder'} {...props} />
}

export interface PriceCurrencyFieldProps extends CurrencyFieldProps {
}

// noinspection JSUnusedGlobalSymbols
export default PriceCurrencyField;
