import Text from './Text';
import { locales } from '../types';
import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';

export function LocaleChange({ locales = [] }: LocaleChangeProps) {
    const { i18n } = useTranslation() as any;
    const { t } = useTranslation();
    const onLocaleChange = useCallback((event) => {
        i18n.changeLanguage(event.target.value);
    }, []);
    return (!locales || (1 >= locales.length) ) ? null : (
        <>
            <Text text={t('locales_change_value')} />
            <select onChange={onLocaleChange}>
                {locales.map(({ value, language }, index) => (
                    <option key={index} value={value}>
                        {language}
                    </option>
                ))}
            </select>
        </>
    );
}

export interface LocaleChangeProps {
    locales?: locales[];
}

export default LocaleChange;
