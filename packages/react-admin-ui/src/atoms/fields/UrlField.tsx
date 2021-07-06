import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import TextField, { TextFieldProps } from './TextField';

export function UrlField({ options = {}, ...props }: UrlFieldProps) {
    const { t } = useTranslation();
    options = useMemo(
        () => ({
            ...options,
            pattern: {
                value: /^(?:([A-Za-z]+):)?(\/{0,3})([0-9.\-A-Za-z]+)(?::(\d+))?(?:\/([^?#]*))?(?:\?([^#]*))?(?:#(.*))?$/,
                message: t('constraints_url'),
            },
            minLength: 3,
            maxLength: 255,
        }),
        [options],
    );

    return <TextField kind={'url'} {...props} options={options} />;
}

export type UrlFieldProps = TextFieldProps;

export default UrlField;
