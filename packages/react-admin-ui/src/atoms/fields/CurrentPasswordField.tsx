import PasswordField, {PasswordFieldProps} from "./PasswordField";

export function CurrentPasswordField(props: CurrentPasswordFieldProps) {
    return (
        <PasswordField kind={'currentPassword'} {...props} />
    );
}

export interface CurrentPasswordFieldProps extends PasswordFieldProps {}

export default CurrentPasswordField
