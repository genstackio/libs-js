import NumberField, {NumberFieldProps} from "./NumberField";

export function RankField(props: RankFieldProps) {
    return <NumberField kind={'rank'} {...props} />;
}

export interface RankFieldProps extends NumberFieldProps {
}

export default RankField;
