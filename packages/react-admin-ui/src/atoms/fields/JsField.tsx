import CodeEditorField, {CodeEditorFieldProps} from "./CodeEditorField";

export function JsField(props: JsFieldProps) {
    return <CodeEditorField kind={'js'} width={800} height={300} {...props} language={'js'} />;
}

export interface JsFieldProps extends Omit<CodeEditorFieldProps, 'language'> {
}

// noinspection JSUnusedGlobalSymbols
export default JsField;
