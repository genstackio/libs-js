import TextField, {TextFieldProps} from "./TextField";

export function OtpField(props: OtpFieldProps) {
    return (
        <TextField name={'otp'} {...props} />
    );
}

export interface OtpFieldProps extends TextFieldProps {}

export default OtpField