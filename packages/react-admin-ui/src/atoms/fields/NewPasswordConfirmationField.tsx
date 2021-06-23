import PasswordConfirmationField, {PasswordConfirmationFieldProps} from "./PasswordConfirmationField";

export function NewPasswordConfirmationField(props: NewPasswordConfirmationFieldProps) {
    return (
        <PasswordConfirmationField kind={'newPasswordConfirmation'} {...props} />
    );
}

export interface NewPasswordConfirmationFieldProps extends PasswordConfirmationFieldProps {}

export default NewPasswordConfirmationField
