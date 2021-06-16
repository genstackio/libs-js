import {useMemo} from "react";
import TextField, {TextFieldProps} from "./TextField";

export function ZipCodeField({options = {}, ...props}: ZipCodeFieldProps) {
    options = useMemo(() => ({
        ...options,
    }), [options]);

    return (
        <TextField name={'zipCode'} {...props} options={options} />
    );
}

export interface ZipCodeFieldProps extends TextFieldProps {
}

export default ZipCodeField