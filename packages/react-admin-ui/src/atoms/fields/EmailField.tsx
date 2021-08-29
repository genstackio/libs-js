import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import TextField, { TextFieldProps } from './TextField';

export function EmailField({ options = {}, ...props }: EmailFieldProps) {
    const { t } = useTranslation();
    options = useMemo(
        () => ({
            ...options,
            pattern: {
                value: /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i,
                message: t('constraints_email'),
            },
            minLength: 3,
            maxLength: 255,
        }),
        [options],
    );

    return <TextField kind={'email'} type={'email'} {...props} options={options} />;
}

export type EmailFieldProps = TextFieldProps;

// noinspection JSUnusedGlobalSymbols
export default EmailField;
