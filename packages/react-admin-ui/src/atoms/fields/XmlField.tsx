import CodeEditorField, { CodeEditorFieldProps } from './CodeEditorField';

export function XmlField(props: XmlFieldProps) {
    return <CodeEditorField kind={'xml'} {...props} language={'xml'} />;
}

export type XmlFieldProps = Omit<CodeEditorFieldProps, 'language'>;

// noinspection JSUnusedGlobalSymbols
export default XmlField;
