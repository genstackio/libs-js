import TextField, { TextFieldProps } from './TextField';

export function CityField(props: CityFieldProps) {
    return <TextField kind={'city'} {...props} />;
}

export type CityFieldProps = TextFieldProps;

export default CityField;
