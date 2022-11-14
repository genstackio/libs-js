import CodeEditorField, {CodeEditorFieldProps} from "./CodeEditorField";

export function JavaField(props: JavaFieldProps) {
    return <CodeEditorField kind={'java'} {...props} language={'java'} />;
}

export interface JavaFieldProps extends Omit<CodeEditorFieldProps, 'language'> {
}

// noinspection JSUnusedGlobalSymbols
export default JavaField;
