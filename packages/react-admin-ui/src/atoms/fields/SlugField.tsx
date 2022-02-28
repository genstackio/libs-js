import TextField, {TextFieldProps} from "./TextField";

export function SlugField(props: SlugFieldProps) {
    return <TextField kind={'slug'} {...props} />;
}

export interface SlugFieldProps extends TextFieldProps {
}

export default SlugField;
