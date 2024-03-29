import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import TextField, { TextFieldProps } from './TextField';

export function UrlField({ options = undefined, ...props }: UrlFieldProps) {
    const { t } = useTranslation();
    options = useMemo(
        () => ({
            ...(options || {}),
            pattern: {
                value: /^(?:([A-Za-z]+):)?(\/{0,3})([0-9.\-A-Za-z]+)(?::(\d+))?(?:\/([^?#]*))?(?:\?([^#]*))?(?:#(.*))?$/,
                message: t('constraints_url'),
            },
            minLength: 3,
            maxLength: 255,
        }),
        [options, t],
    );

    return <TextField kind={'url'} type={'url'} {...props} options={options} />;
}

export type UrlFieldProps = TextFieldProps;

// noinspection JSUnusedGlobalSymbols
export default UrlField;
