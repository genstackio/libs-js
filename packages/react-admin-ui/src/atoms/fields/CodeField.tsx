import TextField, { TextFieldProps } from './TextField';
import { useMemo } from 'react';

export function CodeField({ options = {}, ...props }: CodeFieldProps) {
    options = useMemo(
        () => ({
            ...options,
        }),
        [options],
    );
    return <TextField kind={'code'} {...props} options={options} />;
}

export type CodeFieldProps = TextFieldProps;

// noinspection JSUnusedGlobalSymbols
export default CodeField;
