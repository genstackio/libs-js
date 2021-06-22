import TextField, {TextFieldProps} from "./TextField";

export function CityField(props: CityFieldProps) {
    return (
        <TextField kind={'city'} {...props} />
    );
}

export interface CityFieldProps extends TextFieldProps {}

export default CityField
