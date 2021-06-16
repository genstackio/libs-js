import {useMemo} from "react";
import TextField, {TextFieldProps} from "./TextField";

export function AddressField({options = {}, ...props}: AddressFieldProps) {
    options = useMemo(() => ({
        ...options,
    }), [options]);

    return (
        <TextField name={'address'} {...props} options={options} />
    );
}

export interface AddressFieldProps extends TextFieldProps {
}

export default AddressField