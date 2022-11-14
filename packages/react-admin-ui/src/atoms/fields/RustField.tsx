import CodeEditorField, {CodeEditorFieldProps} from "./CodeEditorField";

export function RustField(props: RustFieldProps) {
    return <CodeEditorField kind={'rust'} {...props} language={'rust'} />;
}

export interface RustFieldProps extends Omit<CodeEditorFieldProps, 'language'> {
}

// noinspection JSUnusedGlobalSymbols
export default RustField;
