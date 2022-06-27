import TextField, {TextFieldProps} from "./TextField";

export function DomainField(props: DomainFieldProps) {
    return <TextField kind={'domain'} {...props} />
}

export interface DomainFieldProps extends TextFieldProps {
}

export default DomainField;
