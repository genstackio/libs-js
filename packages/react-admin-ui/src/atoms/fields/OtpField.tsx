import TextField, {TextFieldProps} from "./TextField";

export function OtpField(props: OtpFieldProps) {
    return (
        <TextField kind={'otp'} {...props} />
    );
}

export interface OtpFieldProps extends TextFieldProps {}

export default OtpField
