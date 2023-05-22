import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

export function createI18nFromLocaleAndResources(
    locale: string | undefined,
    resources: any,
    defaultLocale: string,
    fallbackLocale: string,
    backends: any[] = [],
    options: any = {},
) {
    const i = i18n.createInstance();

    const ii = [...backends, initReactI18next].reduce((acc, b) => acc.use(b), i);

    ii.init({
        resources,
        lng: locale || defaultLocale,
        fallbackLng: fallbackLocale,
        interpolation: {
            escapeValue: false,
        },
        react: {
            useSuspense: false,
        },
        ...options,
    });

    return ii;
}

// noinspection JSUnusedGlobalSymbols
export default createI18nFromLocaleAndResources;
