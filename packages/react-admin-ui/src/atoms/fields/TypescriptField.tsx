import CodeEditorField, {CodeEditorFieldProps} from "./CodeEditorField";

export function TypescriptField(props: TypescriptFieldProps) {
    return <CodeEditorField kind={'typescript'} {...props} language={'typescript'} />;
}

export interface TypescriptFieldProps extends Omit<CodeEditorFieldProps, 'language'> {
}

// noinspection JSUnusedGlobalSymbols
export default TypescriptField;
