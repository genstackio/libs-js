import PasswordField, {PasswordFieldProps} from "./PasswordField";

export function PasswordConfirmationField(props: PasswordConfirmationFieldProps) {
    return (
        <PasswordField kind={'passwordConfirmation'} {...props} />
    );
}

export interface PasswordConfirmationFieldProps extends PasswordFieldProps {}

export default PasswordConfirmationField
