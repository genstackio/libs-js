import EmailField, {EmailFieldProps} from "./EmailField";

export function UsernameField({...props}: UsernameFieldProps) {
    return (
        <EmailField kind={'username'} {...props} />
    );
}

export interface UsernameFieldProps extends EmailFieldProps {
}

export default UsernameField
