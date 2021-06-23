import { useMemo } from 'react';
import TextField, { TextFieldProps } from './TextField';
import { useTranslation } from 'react-i18next';

export function IpAddressField({ options = {}, ...props }: IpAddressFieldProps) {
    const { t } = useTranslation();
    options = useMemo(
        () => ({
            ...options,
            pattern: {
                value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/i,
                message: t('constraints_ip_address'),
            },
            minLength: 7,
            maxLength: 15,
        }),
        [options],
    );

    return <TextField kind={'ipAddress'} {...props} options={options} />;
}

export type IpAddressFieldProps = TextFieldProps;

export default IpAddressField;
