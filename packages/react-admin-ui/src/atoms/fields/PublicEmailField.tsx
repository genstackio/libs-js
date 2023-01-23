import EmailField, { EmailFieldProps } from './EmailField';

export function PublicEmailField(props: PublicEmailFieldProps) {
    return <EmailField kind={'publicEmail'} {...props} />;
}

export type PublicEmailFieldProps = EmailFieldProps;

// noinspection JSUnusedGlobalSymbols
export default PublicEmailField;
