import { useMemo } from 'react';

export function useI18nFromLocale(locale: string | undefined, createI18n: Function): any {
    return useMemo(() => createI18n(locale ? locale.replace('_', '-') : undefined), [locale, createI18n]);
}

export default useI18nFromLocale;
