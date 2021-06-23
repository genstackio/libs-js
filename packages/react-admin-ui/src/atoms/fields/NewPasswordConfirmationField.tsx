import PasswordConfirmationField, { PasswordConfirmationFieldProps } from './PasswordConfirmationField';

export function NewPasswordConfirmationField(props: NewPasswordConfirmationFieldProps) {
    return <PasswordConfirmationField kind={'newPasswordConfirmation'} {...props} />;
}

export type NewPasswordConfirmationFieldProps = PasswordConfirmationFieldProps;

export default NewPasswordConfirmationField;
