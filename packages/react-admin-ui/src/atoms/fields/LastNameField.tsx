import {useMemo} from "react";
import TextField, {TextFieldProps} from "./TextField";

export function LastNameField({options = {}, ...props}: LastNameFieldProps) {
    options = useMemo(() => ({
        ...options,
    }), [options]);

    return (
        <TextField name={'lastName'} {...props} options={options} />
    );
}

export interface LastNameFieldProps extends TextFieldProps {}

export default LastNameField