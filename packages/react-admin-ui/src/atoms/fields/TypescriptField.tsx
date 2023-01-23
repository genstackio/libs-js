import CodeEditorField, { CodeEditorFieldProps } from './CodeEditorField';

export function TypescriptField(props: TypescriptFieldProps) {
    return <CodeEditorField kind={'typescript'} {...props} language={'typescript'} />;
}

export type TypescriptFieldProps = Omit<CodeEditorFieldProps, 'language'>;

// noinspection JSUnusedGlobalSymbols
export default TypescriptField;
