import CodeEditorField, { CodeEditorFieldProps } from './CodeEditorField';

export function YamlField(props: YamlFieldProps) {
    return <CodeEditorField kind={'yaml'} {...props} language={'yaml'} />;
}

export type YamlFieldProps = Omit<CodeEditorFieldProps, 'language'>;

// noinspection JSUnusedGlobalSymbols
export default YamlField;
