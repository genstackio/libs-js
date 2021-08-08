import clsx from 'clsx';
import TextField, { TextFieldProps } from './TextField';

export function ColorField({ className, ...props }: ColorFieldProps) {
    return <TextField kind={'color'} type={'color'} {...props} className={clsx('x-field-min-h', className)} />;
}

export type ColorFieldProps = TextFieldProps;

// noinspection JSUnusedGlobalSymbols
export default ColorField;
