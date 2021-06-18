import {useMemo} from "react";
import TextField, {TextFieldProps} from "./TextField";
import {useTranslation} from "react-i18next";

export function PhoneField({options = {}, ...props}: PhoneFieldProps) {
    const {t} = useTranslation();
    options = useMemo(() => ({
        ...options,
        pattern: {
            value: /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/,
            message: t('constraints_phone')
        },
        minLength: 3,
        maxLength: 20,
    }), [options]);

    return (
        <TextField name={'phone'} {...props} options={options} />
    );
}

export interface PhoneFieldProps extends TextFieldProps {
}

export default PhoneField
