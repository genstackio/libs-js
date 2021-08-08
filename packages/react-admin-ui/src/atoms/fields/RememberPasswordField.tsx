import CheckboxField, { CheckboxFieldProps } from './CheckboxField';

export function RememberPasswordField(props: RememberPasswordFieldProps) {
    return <CheckboxField kind={'rememberPassword'} {...props} />;
}

export type RememberPasswordFieldProps = CheckboxFieldProps;

// noinspection JSUnusedGlobalSymbols
export default RememberPasswordField;
