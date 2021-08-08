import { useMemo } from 'react';
import TextField, { TextFieldProps } from './TextField';

export function ZipCodeField({ options = {}, ...props }: ZipCodeFieldProps) {
    options = useMemo(
        () => ({
            ...options,
        }),
        [options],
    );

    return <TextField kind={'zipCode'} {...props} options={options} />;
}

export type ZipCodeFieldProps = TextFieldProps;

// noinspection JSUnusedGlobalSymbols
export default ZipCodeField;
