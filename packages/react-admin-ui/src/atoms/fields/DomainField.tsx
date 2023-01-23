import TextField, { TextFieldProps } from './TextField';

export function DomainField(props: DomainFieldProps) {
    return <TextField kind={'domain'} {...props} />;
}

export type DomainFieldProps = TextFieldProps;

export default DomainField;
