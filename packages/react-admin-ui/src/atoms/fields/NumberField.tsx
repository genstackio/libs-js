import TextField, { TextFieldProps } from './TextField';
import { useMemo } from 'react';

export function NumberField({ options = {}, ...props }: NumberFieldProps) {
    options = useMemo(
        () => ({
            ...options,
        }),
        [options],
    );
    return <TextField kind={'number'} type={'number'} {...props} />;
}

export type NumberFieldProps = TextFieldProps;

export default NumberField;
