import TextField, {TextFieldProps} from './TextField';

export function DateField(props: DateFieldProps) {
    return (
        <TextField kind={'date'} type={'date'} {...props} />
    );
}

export interface DateFieldProps extends TextFieldProps {
}

export default DateField
