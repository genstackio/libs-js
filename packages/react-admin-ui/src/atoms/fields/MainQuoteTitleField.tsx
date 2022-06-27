import TextField, {TextFieldProps} from "./TextField";

export function MainQuoteTitleField(props: MainQuoteTitleFieldProps) {
    return <TextField kind={'mainQuoteTitle'} {...props} />
}

export interface MainQuoteTitleFieldProps extends TextFieldProps {
}

// noinspection JSUnusedGlobalSymbols
export default MainQuoteTitleField;
