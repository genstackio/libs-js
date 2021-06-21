import TextField, {TextFieldProps} from "./TextField";
import {useMemo} from "react";
import {useTranslation} from "react-i18next";

export function PasswordField({options = {}, ...props}: PasswordFieldProps) {
    const {t} = useTranslation();
    options = useMemo(() => ({
        minLength: {value: 8, message: t('constraints_too_short')},
        maxLength: {value: 255, message: t('constraints_too_long')},
        ...options,
    }), [options])
    return (
        <TextField name={'password'} type={'password'} {...props} />
    );
}

export interface PasswordFieldProps extends TextFieldProps {
}

export default PasswordField
