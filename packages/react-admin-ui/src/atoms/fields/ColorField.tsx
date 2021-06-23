import clsx from 'clsx';
import TextField, { TextFieldProps } from './TextField';

export function ColorField({ className, ...props }: ColorFieldProps) {
    return <TextField kind={'color'} type={'color'} className={clsx('x-field-min-h', className)} {...props} />;
}

export type ColorFieldProps = TextFieldProps;

export default ColorField;
