import CodeEditorField, {CodeEditorFieldProps} from "./CodeEditorField";

export function RubyField(props: RubyFieldProps) {
    return <CodeEditorField kind={'ruby'} {...props} language={'ruby'} />;
}

export interface RubyFieldProps extends Omit<CodeEditorFieldProps, 'language'> {
}

// noinspection JSUnusedGlobalSymbols
export default RubyField;
