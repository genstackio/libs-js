import TextareaField, {TextareaFieldProps} from "./TextareaField";

export function MainQuoteField(props: MainQuoteFieldProps) {
    return <TextareaField kind={"mainQuote"} {...props} />;
}

export interface MainQuoteFieldProps extends TextareaFieldProps {
}

// noinspection JSUnusedGlobalSymbols
export default MainQuoteField;
