import TextField, {TextFieldProps} from './TextField';

export function TimeField(props: TimeFieldProps) {
    return (
        <TextField kind={'time'} type='time' {...props} />
    );
}

export interface TimeFieldProps extends TextFieldProps {
}

export default TimeField
