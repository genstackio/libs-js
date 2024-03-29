import EmailField, { EmailFieldProps } from './EmailField';

export function UsernameField({ ...props }: UsernameFieldProps) {
    return <EmailField kind={'username'} {...props} />;
}

export type UsernameFieldProps = EmailFieldProps;

// noinspection JSUnusedGlobalSymbols
export default UsernameField;
