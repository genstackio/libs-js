import CodeEditorField, { CodeEditorFieldProps } from './CodeEditorField';

export function RustField(props: RustFieldProps) {
    return <CodeEditorField kind={'rust'} {...props} language={'rust'} />;
}

export type RustFieldProps = Omit<CodeEditorFieldProps, 'language'>;

// noinspection JSUnusedGlobalSymbols
export default RustField;
