import NumberField, {NumberFieldProps} from "./NumberField";

export function TtlField(props: TtlFieldProps) {
    return <NumberField kind={'ttl'} {...props} />;
}

export interface TtlFieldProps extends NumberFieldProps {
}

export default TtlField;
