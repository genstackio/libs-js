import {useMemo} from "react";
import TextField, {TextFieldProps} from "./TextField";

export function EmailField({options = {}, ...props}: EmailFieldProps) {
    options = useMemo(() => ({
        ...options,
    }), [options]);

    return (
        <TextField name={'email'} {...props} options={options} />
    );
}

export interface EmailFieldProps extends TextFieldProps {
}

export default EmailField