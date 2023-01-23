import CodeEditorField, { CodeEditorFieldProps } from './CodeEditorField';

export function PythonField(props: PythonFieldProps) {
    return <CodeEditorField kind={'python'} {...props} language={'python'} />;
}

export type PythonFieldProps = Omit<CodeEditorFieldProps, 'language'>;

// noinspection JSUnusedGlobalSymbols
export default PythonField;
