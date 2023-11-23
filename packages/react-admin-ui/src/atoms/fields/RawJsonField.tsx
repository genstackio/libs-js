import CodeEditorField, { CodeEditorFieldProps } from './CodeEditorField';

export function RawJsonField(props: RawJsonFieldProps) {
    return <CodeEditorField kind={'json'} {...props} language={'json'} asString />;
}

export type RawJsonFieldProps = Omit<CodeEditorFieldProps, 'language'>;

// noinspection JSUnusedGlobalSymbols
export default RawJsonField;
