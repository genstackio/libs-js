import TextField, { TextFieldProps } from './TextField';

export function MainQuoteTitleField(props: MainQuoteTitleFieldProps) {
    return <TextField kind={'mainQuoteTitle'} {...props} />;
}

export type MainQuoteTitleFieldProps = TextFieldProps;

// noinspection JSUnusedGlobalSymbols
export default MainQuoteTitleField;
