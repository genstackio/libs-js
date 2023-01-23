import CodeEditorField, { CodeEditorFieldProps } from './CodeEditorField';

export function JavaField(props: JavaFieldProps) {
    return <CodeEditorField kind={'java'} {...props} language={'java'} />;
}

export type JavaFieldProps = Omit<CodeEditorFieldProps, 'language'>;

// noinspection JSUnusedGlobalSymbols
export default JavaField;
