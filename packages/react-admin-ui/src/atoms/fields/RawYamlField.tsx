import CodeEditorField, { CodeEditorFieldProps } from './CodeEditorField';

export function RawYamlField(props: RawYamlFieldProps) {
    return <CodeEditorField kind={'yaml'} {...props} language={'yaml'} asString />;
}

export type RawYamlFieldProps = Omit<CodeEditorFieldProps, 'language'>;

// noinspection JSUnusedGlobalSymbols
export default RawYamlField;
