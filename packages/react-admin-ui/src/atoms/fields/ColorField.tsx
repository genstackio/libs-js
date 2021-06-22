import TextField, {TextFieldProps} from "./TextField";

export function ColorField(props: ColorFieldProps) {
    return (
        <TextField kind={'color'} type={'color'} {...props}  />
    );
}

export interface ColorFieldProps extends TextFieldProps {}

export default ColorField
