import { useMemo } from 'react';
import TextField, { TextFieldProps } from './TextField';

export function FirstNameField({ options = undefined, ...props }: FirstNameFieldProps) {
    options = useMemo(
        () => ({
            ...(options || {}),
        }),
        [options],
    );

    return <TextField kind={'firstName'} {...props} options={options} />;
}

export type FirstNameFieldProps = TextFieldProps;

// noinspection JSUnusedGlobalSymbols
export default FirstNameField;
