import SelectField, { SelectFieldProps } from './SelectField';

export function CurrencyField(props: CurrencyFieldProps) {
    const currencies = [
        { label: 'EUR (Euro)', value: 'EUR' },
        { label: 'USD (US Dollar)', value: 'USD' },
        { label: 'CAD (Canadian Dollar)', value: 'CAD' },
        { label: 'GBP (British Pound)', value: 'GBP' },
        { label: 'CHF (Swiss Franc)', value: 'CHF' },
        { label: 'MAD (Moroccan Dirham)', value: 'MAD' },
        { label: 'MUR (Mauritian Rupee)', value: 'MUR' },
        { label: 'XBT (Bitcoin)', value: 'XBT' },
        { label: 'XOF (Franc CFA / UEMOA)', value: 'XOF' },
        { label: 'XAF (Franc CFA / CEMAC)', value: 'XAF' },
        { label: 'XPF (Franc CFP)', value: 'XPF' },
    ];

    return <SelectField kind={'currency'} values={currencies} {...props} />;
}

export type CurrencyFieldProps = SelectFieldProps;

// noinspection JSUnusedGlobalSymbols
export default CurrencyField;
