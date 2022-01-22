import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import TextField, { TextFieldProps } from './TextField';

export function PasswordField({ options = undefined, ...props }: PasswordFieldProps) {
    const { t } = useTranslation();
    options = useMemo(
        () => ({
            minLength: { value: 8, message: t('constraints_too_short') },
            maxLength: { value: 255, message: t('constraints_too_long') },
            ...(options || {}),
        }),
        [options, t],
    );

    return <TextField kind={'password'} type={'password'} {...props} />;
}

export type PasswordFieldProps = TextFieldProps;

// noinspection JSUnusedGlobalSymbols
export default PasswordField;
