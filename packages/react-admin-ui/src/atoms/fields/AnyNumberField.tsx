import { useMemo } from 'react';
import TextField, { TextFieldProps } from './TextField';
import clsx from "clsx";

export function AnyNumberField({ options = undefined, className, ...props }: AnyNumberFieldProps) {
    options = useMemo(
        () => ({
            ...(options || {}),
        }),
        [options],
    );

    return <TextField kind={'number'} type={'number'} step={'any'} {...props} valueAs={'number'} className={clsx('appearance-none', className)} />;
}

export type AnyNumberFieldProps = TextFieldProps;

// noinspection JSUnusedGlobalSymbols
export default AnyNumberField;
