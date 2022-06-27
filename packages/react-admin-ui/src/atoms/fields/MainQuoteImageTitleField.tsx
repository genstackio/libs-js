import TextField, {TextFieldProps} from "./TextField";

export function MainQuoteImageTitleField(props: MainQuoteImageTitleFieldProps) {
    return <TextField kind={'mainQuoteImageTitle'} {...props} />
}

export interface MainQuoteImageTitleFieldProps extends TextFieldProps {
}

// noinspection JSUnusedGlobalSymbols
export default MainQuoteImageTitleField;
