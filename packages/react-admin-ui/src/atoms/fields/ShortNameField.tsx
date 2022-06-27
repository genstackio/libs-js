import TextField, {TextFieldProps} from "./TextField";

export function ShortNameField(props: ShortNameFieldProps) {
    return <TextField kind={'shortName'} {...props} />
}

export interface ShortNameFieldProps extends TextFieldProps {
}

// noinspection JSUnusedGlobalSymbols
export default ShortNameField;
