import NumberField, { NumberFieldProps } from './NumberField';

export function YearField(props: YearFieldProps) {
    return <NumberField kind={'year'} {...props} />;
}

export type YearFieldProps = NumberFieldProps;

// noinspection JSUnusedGlobalSymbols
export default YearField;
