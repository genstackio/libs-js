import PasswordField, { PasswordFieldProps } from './PasswordField';

export function CurrentPasswordField(props: CurrentPasswordFieldProps) {
    return <PasswordField kind={'currentPassword'} {...props} />;
}

export type CurrentPasswordFieldProps = PasswordFieldProps;

export default CurrentPasswordField;
