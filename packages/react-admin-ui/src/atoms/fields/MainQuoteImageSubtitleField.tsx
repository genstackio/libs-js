import TextField, {TextFieldProps} from "./TextField";

export function MainQuoteImageSubtitleField(props: MainQuoteImageSubtitleFieldProps) {
    return <TextField kind={'mainQuoteImageSubtitle'} {...props} />
}

export interface MainQuoteImageSubtitleFieldProps extends TextFieldProps {
}

// noinspection JSUnusedGlobalSymbols
export default MainQuoteImageSubtitleField;
