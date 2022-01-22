import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import TextField, { TextFieldProps } from './TextField';

export function PhoneField({ options = undefined, ...props }: PhoneFieldProps) {
    const { t } = useTranslation();
    options = useMemo(
        () => ({
            ...(options || {}),
            pattern: {
                value: /^[+]*[(]?[0-9]{1,4}[)]?[-\s./0-9]*$/,
                message: t('constraints_phone'),
            },
            minLength: { value: 3, message: t('constraints_not_enough_digit', { min: 3 }) },
            maxLength: { value: 20, message: t('constraints_too_much_digit', { max: 20 }) },
        }),
        [options, t],
    );

    return <TextField kind={'phone'} type={'tel'} {...props} options={options} />;
}

export type PhoneFieldProps = TextFieldProps;

// noinspection JSUnusedGlobalSymbols
export default PhoneField;
