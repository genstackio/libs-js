import { useMemo } from 'react';
import TextField, { TextFieldProps } from './TextField';

export function LastNameField({ options = {}, ...props }: LastNameFieldProps) {
    options = useMemo(
        () => ({
            ...options,
        }),
        [options],
    );

    return <TextField kind={'lastName'} {...props} options={options} />;
}

export type LastNameFieldProps = TextFieldProps;

// noinspection JSUnusedGlobalSymbols
export default LastNameField;
