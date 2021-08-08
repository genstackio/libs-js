import TextField, { TextFieldProps } from './TextField';

export function OtpField(props: OtpFieldProps) {
    return <TextField kind={'otp'} {...props} />;
}

export type OtpFieldProps = TextFieldProps;

// noinspection JSUnusedGlobalSymbols
export default OtpField;
