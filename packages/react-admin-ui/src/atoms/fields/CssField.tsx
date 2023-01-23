import CodeEditorField, { CodeEditorFieldProps } from './CodeEditorField';

export function CssField(props: CssFieldProps) {
    return <CodeEditorField kind={'css'} width={800} height={300} {...props} language={'css'} />;
}

export type CssFieldProps = Omit<CodeEditorFieldProps, 'language'>;

// noinspection JSUnusedGlobalSymbols
export default CssField;
