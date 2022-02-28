import TextareaField, {TextareaFieldProps} from "./TextareaField";

export function PresentationField(props: PresentationFieldProps) {
    return <TextareaField kind={'presentation'} {...props} />
}

export interface PresentationFieldProps extends TextareaFieldProps {
}

export default PresentationField;
