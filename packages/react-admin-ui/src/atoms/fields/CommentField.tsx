import TextField, {TextFieldProps} from "./TextField";

export function CommentField(props: CommentFieldProps) {
    return <TextField kind={'comment'} {...props} />
}

export interface CommentFieldProps extends TextFieldProps {
}

// noinspection JSUnusedGlobalSymbols
export default CommentField;
