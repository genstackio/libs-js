import TextField, {TextFieldProps} from "./TextField";

export function TitleField(props: TitleFieldProps) {
    return <TextField kind={'title'} {...props} />
}

export interface TitleFieldProps extends TextFieldProps {
}

// noinspection JSUnusedGlobalSymbols
export default TitleField;
