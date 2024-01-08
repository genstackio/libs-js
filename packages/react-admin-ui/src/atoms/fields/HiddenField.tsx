import { useMemo } from 'react';
import TextField, { TextFieldProps } from './TextField';

export function HiddenField({ options = undefined, ...props }: HiddenFieldProps) {
    options = useMemo(
        () => ({
            ...(options || {}),
        }),
        [options],
    );

    return <TextField kind={'hidden'} type={'hidden'} {...props} />;
}

export type HiddenFieldProps = TextFieldProps;

// noinspection JSUnusedGlobalSymbols
export default HiddenField;
