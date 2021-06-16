import TextField, {TextFieldProps} from "./TextField";
import {useMemo} from "react";

export function PasswordField({options = {}, ...props}: PasswordFieldProps) {
    options = useMemo(() => ({
        minLength: 8,
        ...options,
    }), [options])
    return (
        <TextField name={'password'} type={'password'} {...props} />
    );
}

export interface PasswordFieldProps extends TextFieldProps {
}

export default PasswordField