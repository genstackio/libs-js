import TextField, { TextFieldProps } from './TextField';

export function NinField(props: NinFieldProps) {
    return <TextField kind={'nin'} {...props} />;
}

export type NinFieldProps = TextFieldProps;

// noinspection JSUnusedGlobalSymbols
export default NinField;
