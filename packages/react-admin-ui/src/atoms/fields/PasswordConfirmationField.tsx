import {useMemo} from "react";
import TextField, {TextFieldProps} from "./TextField";
import {useTranslation} from "react-i18next";

export function PasswordConfirmationField({options = {}, ...props}: PasswordConfirmationFieldProps) {
    const {t} = useTranslation();
    options = useMemo(() => ({
      minLength: {value: 8, message: t('constraints_too_short')},
      maxLength: {value: 255, message: t('constraints_too_long')},
        ...options,
    }), [options])
    return (
        <TextField name={'password_confirmation'} type={'password'} options={options} {...props} />
    );
}

export interface PasswordConfirmationFieldProps extends TextFieldProps {}

export default PasswordConfirmationField
