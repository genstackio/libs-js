import NumberField, { NumberFieldProps } from './NumberField';

export function RankField(props: RankFieldProps) {
    return <NumberField kind={'rank'} {...props} />;
}

export type RankFieldProps = NumberFieldProps;

export default RankField;
