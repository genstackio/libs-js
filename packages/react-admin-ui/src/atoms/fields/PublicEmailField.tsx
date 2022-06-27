import EmailField, {EmailFieldProps} from "./EmailField";

export function PublicEmailField(props: PublicEmailFieldProps) {
    return <EmailField kind={'publicEmail'} {...props} />
}

export interface PublicEmailFieldProps extends EmailFieldProps {
}

// noinspection JSUnusedGlobalSymbols
export default PublicEmailField;
