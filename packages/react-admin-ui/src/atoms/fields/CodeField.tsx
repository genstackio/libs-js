import { useMemo } from 'react';
import TextField, { TextFieldProps } from './TextField';

export function CodeField({ options = undefined, ...props }: CodeFieldProps) {
    options = useMemo(
        () => ({
            ...(options || {}),
        }),
        [options],
    );

    return <TextField kind={'code'} {...props} options={options} />;
}

export type CodeFieldProps = TextFieldProps;

// noinspection JSUnusedGlobalSymbols
export default CodeField;
