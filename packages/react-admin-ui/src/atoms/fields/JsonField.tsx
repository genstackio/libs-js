import CodeEditorField, {CodeEditorFieldProps} from "./CodeEditorField";

export function JsonField(props: JsonFieldProps) {
    return <CodeEditorField kind={'json'} {...props} language={'json'} />;
}

export interface JsonFieldProps extends Omit<CodeEditorFieldProps, 'language'> {
}

// noinspection JSUnusedGlobalSymbols
export default JsonField;
