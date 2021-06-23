import PasswordField, {PasswordFieldProps} from "./PasswordField";

export function NewPasswordField(props: NewPasswordFieldProps) {
    return (
        <PasswordField kind={'newPassword'} {...props} />
    );
}

export interface NewPasswordFieldProps extends PasswordFieldProps {}

export default NewPasswordField
