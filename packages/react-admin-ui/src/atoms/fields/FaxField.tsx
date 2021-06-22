import PhoneField, {PhoneFieldProps} from "./PhoneField";

export function FaxField(props: FaxFieldProps) {
    return (
        <PhoneField kind={'fax'} {...props} />
    );
}

export interface FaxFieldProps extends PhoneFieldProps {}

export default FaxField
