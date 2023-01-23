import PhoneField, { PhoneFieldProps } from './PhoneField';

export function PublicPhoneField(props: PublicPhoneFieldProps) {
    return <PhoneField kind={'publicPhone'} {...props} />;
}

export type PublicPhoneFieldProps = PhoneFieldProps;

// noinspection JSUnusedGlobalSymbols
export default PublicPhoneField;
