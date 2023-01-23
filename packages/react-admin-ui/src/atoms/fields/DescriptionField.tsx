import TextareaField, { TextareaFieldProps } from './TextareaField';

export function DescriptionField(props: DescriptionFieldProps) {
    return <TextareaField kind={'description'} {...props} />;
}

export type DescriptionFieldProps = TextareaFieldProps;

export default DescriptionField;
