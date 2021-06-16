import {useMemo} from "react";
import TextField, {TextFieldProps} from "./TextField";

export function FirstNameField({options = {}, ...props}: FirstNameFieldProps) {
    options = useMemo(() => ({
        ...options,
    }), [options]);

    return (
        <TextField name={'firstName'} {...props} options={options} />
    );
}

export interface FirstNameFieldProps extends TextFieldProps {
}

export default FirstNameField