import TextareaField, {TextareaFieldProps} from "./TextareaField";

export function DescriptionField(props: DescriptionFieldProps) {
    return <TextareaField kind={'description'} {...props} />
}

export interface DescriptionFieldProps extends TextareaFieldProps {
}

export default DescriptionField;
