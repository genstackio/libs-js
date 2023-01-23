import CodeEditorField, { CodeEditorFieldProps } from './CodeEditorField';

export function JsonField(props: JsonFieldProps) {
    return <CodeEditorField kind={'json'} {...props} language={'json'} />;
}

export type JsonFieldProps = Omit<CodeEditorFieldProps, 'language'>;

// noinspection JSUnusedGlobalSymbols
export default JsonField;
