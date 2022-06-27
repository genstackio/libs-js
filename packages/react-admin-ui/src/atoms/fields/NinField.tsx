import TextField, {TextFieldProps} from "./TextField";

export function NinField(props: NinFieldProps) {
    return <TextField kind={'nin'} {...props} />
}

export interface NinFieldProps extends TextFieldProps {
}

// noinspection JSUnusedGlobalSymbols
export default NinField;
