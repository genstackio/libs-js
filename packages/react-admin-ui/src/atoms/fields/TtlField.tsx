import NumberField, { NumberFieldProps } from './NumberField';

export function TtlField(props: TtlFieldProps) {
    return <NumberField kind={'ttl'} {...props} />;
}

export type TtlFieldProps = NumberFieldProps;

export default TtlField;
