import CodeEditorField, {CodeEditorFieldProps} from "./CodeEditorField";

export function PythonField(props: PythonFieldProps) {
    return <CodeEditorField kind={'python'} {...props} language={'python'} />;
}

export interface PythonFieldProps extends Omit<CodeEditorFieldProps, 'language'> {
}

// noinspection JSUnusedGlobalSymbols
export default PythonField;
