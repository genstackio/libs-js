import TextField, { TextFieldProps } from './TextField';

export function KindField(props: KindFieldProps) {
    return <TextField kind={'kind'} {...props} />;
}

export type KindFieldProps = TextFieldProps;

// noinspection JSUnusedGlobalSymbols
export default KindField;
