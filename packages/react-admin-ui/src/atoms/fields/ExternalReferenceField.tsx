import TextField, { TextFieldProps } from './TextField';

export function ExternalReferenceField(props: ExternalReferenceFieldProps) {
    return <TextField kind={'externalReference'} {...props} />;
}

export type ExternalReferenceFieldProps = TextFieldProps;

export default ExternalReferenceField;
