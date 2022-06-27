import NumberField, {NumberFieldProps} from "./NumberField";

export function YearField(props: YearFieldProps) {
    return <NumberField kind={'year'} {...props} />;
}

export interface YearFieldProps extends NumberFieldProps {
}

// noinspection JSUnusedGlobalSymbols
export default YearField;
