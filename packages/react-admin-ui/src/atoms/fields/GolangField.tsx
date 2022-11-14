import CodeEditorField, {CodeEditorFieldProps} from "./CodeEditorField";

export function GolangField(props: GolangFieldProps) {
    return <CodeEditorField kind={'golang'} {...props} language={'golang'} />;
}

export interface GolangFieldProps extends Omit<CodeEditorFieldProps, 'language'> {
}

// noinspection JSUnusedGlobalSymbols
export default GolangField;
