import { useMemo } from 'react';
import TextField, { TextFieldProps } from './TextField';

export function NumberField({ options = undefined, ...props }: NumberFieldProps) {
    options = useMemo(
        () => ({
            ...(options || {}),
        }),
        [options],
    );

    return <TextField kind={'number'} type={'number'} {...props} valueAs={'number'} />;
}

export type NumberFieldProps = TextFieldProps;

// noinspection JSUnusedGlobalSymbols
export default NumberField;
