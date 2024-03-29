import PasswordField, { PasswordFieldProps } from './PasswordField';

export function NewPasswordField(props: NewPasswordFieldProps) {
    return <PasswordField kind={'newPassword'} {...props} />;
}

export type NewPasswordFieldProps = PasswordFieldProps;

// noinspection JSUnusedGlobalSymbols
export default NewPasswordField;
