import clsx from 'clsx';
import TextField, { TextFieldProps } from './TextField';

const classes = {input: 'pt-0 pb-0 pr-0 pl-0'};

export function ColorField({ className, ...props }: ColorFieldProps) {
    return (
        <TextField
            kind={'color'}
            type={'color'}
            {...props}
            className={clsx('x-field-min-h', className)}
            classes={classes}
        />
    );
}

export type ColorFieldProps = TextFieldProps;

// noinspection JSUnusedGlobalSymbols
export default ColorField;
