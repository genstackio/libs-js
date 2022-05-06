import clsx from 'clsx';
import TextField, { TextFieldProps } from './TextField';

const classes = {input: 'w-14 pt-0 pb-0 pr-0 pl-0'};

export function ColorField({ className, inline = true, ...props }: ColorFieldProps) {
    return (
        <TextField
            kind={'color'}
            type={'color'}
            {...props}
            className={clsx('', className)}
            classes={classes}
            inline={inline}
        />
    );
}

export type ColorFieldProps = TextFieldProps;

// noinspection JSUnusedGlobalSymbols
export default ColorField;
