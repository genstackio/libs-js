import {useMemo} from "react";
import TextField, {TextFieldProps} from "./TextField";
import {useTranslation} from "react-i18next";

export function PhoneField({options = {}, ...props}: PhoneFieldProps) {
    const {t} = useTranslation();
    options = useMemo(() => ({
        ...options,
        pattern: {
            value: /^((\+)33|0)[1-9](\d{2}){4}$/i,
            message: t(['field_phone_error'])
        }
    }), [options]);

    return (
        <TextField name={'phone'} {...props} options={options} />
    );
}

export interface PhoneFieldProps extends TextFieldProps {
}

export default PhoneField