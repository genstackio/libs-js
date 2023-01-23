import TextareaField, { TextareaFieldProps } from './TextareaField';

export function PresentationField(props: PresentationFieldProps) {
    return <TextareaField kind={'presentation'} {...props} />;
}

export type PresentationFieldProps = TextareaFieldProps;

export default PresentationField;
