import PasswordField, { PasswordFieldProps } from './PasswordField';

export function PasswordConfirmationField(props: PasswordConfirmationFieldProps) {
    return <PasswordField kind={'passwordConfirmation'} {...props} />;
}

export type PasswordConfirmationFieldProps = PasswordFieldProps;

export default PasswordConfirmationField;
