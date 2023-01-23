import TextField, { TextFieldProps } from './TextField';

export function SlugField(props: SlugFieldProps) {
    return <TextField kind={'slug'} {...props} />;
}

export type SlugFieldProps = TextFieldProps;

export default SlugField;
