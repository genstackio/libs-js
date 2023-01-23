import CodeEditorField, { CodeEditorFieldProps } from './CodeEditorField';

export function RubyField(props: RubyFieldProps) {
    return <CodeEditorField kind={'ruby'} {...props} language={'ruby'} />;
}

export type RubyFieldProps = Omit<CodeEditorFieldProps, 'language'>;

// noinspection JSUnusedGlobalSymbols
export default RubyField;
