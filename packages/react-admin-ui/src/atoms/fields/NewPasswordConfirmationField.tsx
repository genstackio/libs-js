import PasswordConfirmationField, { PasswordConfirmationFieldProps } from './PasswordConfirmationField';

export function NewPasswordConfirmationField(props: NewPasswordConfirmationFieldProps) {
    return <PasswordConfirmationField kind={'newPasswordConfirmation'} {...props} />;
}

export type NewPasswordConfirmationFieldProps = PasswordConfirmationFieldProps;

// noinspection JSUnusedGlobalSymbols
export default NewPasswordConfirmationField;
