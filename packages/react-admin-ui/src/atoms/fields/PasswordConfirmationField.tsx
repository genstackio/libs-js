import {useMemo} from "react";
import TextField, {TextFieldProps} from "./TextField";

export function PasswordConfirmationField({options = {}, ...props}: PasswordConfirmationFieldProps) {
    options = useMemo(() => ({
        minLength: 8,
        ...options,
    }), [options])
    return (
        <TextField name={'password_confirmation'} type={'password'} options={options} {...props} />
    );
}

export interface PasswordConfirmationFieldProps extends TextFieldProps {}

export default PasswordConfirmationField