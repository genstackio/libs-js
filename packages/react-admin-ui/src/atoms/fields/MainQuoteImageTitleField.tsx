import TextField, { TextFieldProps } from './TextField';

export function MainQuoteImageTitleField(props: MainQuoteImageTitleFieldProps) {
    return <TextField kind={'mainQuoteImageTitle'} {...props} />;
}

export type MainQuoteImageTitleFieldProps = TextFieldProps;

// noinspection JSUnusedGlobalSymbols
export default MainQuoteImageTitleField;
