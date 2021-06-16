import {useMemo} from "react";
import TextField, {TextFieldProps} from "./TextField";

export function AdditionalAddressField({options = {}, ...props}: AdditionalAddressFieldProps) {
    options = useMemo(() => ({
        ...options,
    }), [options]);

    return (
        <TextField name={'additionalAddress'} {...props} options={options} />
    );
}

export interface AdditionalAddressFieldProps extends TextFieldProps {
}

export default AdditionalAddressField