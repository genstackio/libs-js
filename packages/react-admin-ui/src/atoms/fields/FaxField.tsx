import PhoneField, { PhoneFieldProps } from './PhoneField';

export function FaxField(props: FaxFieldProps) {
    return <PhoneField kind={'fax'} {...props} />;
}

export type FaxFieldProps = PhoneFieldProps;

export default FaxField;
