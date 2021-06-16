import {useMemo} from "react";
import TextField, {TextFieldProps} from "./TextField";

export function PhoneField({options = {}, ...props}: PhoneFieldProps) {
    options = useMemo(() => ({
        ...options,
    }), [options]);

    return (
        <TextField name={'phone'} {...props} options={options} />
    );
}

export interface PhoneFieldProps extends TextFieldProps {
}

export default PhoneField