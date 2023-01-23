import TextField, { TextFieldProps } from './TextField';

export function TitleField(props: TitleFieldProps) {
    return <TextField kind={'title'} {...props} />;
}

export type TitleFieldProps = TextFieldProps;

// noinspection JSUnusedGlobalSymbols
export default TitleField;
