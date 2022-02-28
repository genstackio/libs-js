import TextField, {TextFieldProps} from "./TextField";

export function ExternalReferenceField(props: ExternalReferenceFieldProps) {
    return <TextField kind={'externalReference'} {...props} />;
}

export interface ExternalReferenceFieldProps extends TextFieldProps {
}

export default ExternalReferenceField;
