import TextField, { TextFieldProps } from './TextField';

export function SubjectField(props: SubjectFieldProps) {
    return <TextField kind={'subject'} {...props} />;
}

export type SubjectFieldProps = TextFieldProps;

// noinspection JSUnusedGlobalSymbols
export default SubjectField;
