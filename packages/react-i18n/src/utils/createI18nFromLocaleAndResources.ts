import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

export function createI18nFromLocaleAndResources(
    locale: string | undefined,
    resources: any,
    defaultLocale: string | undefined,
    fallbackLocale: string,
    backends: any[] = [],
    { suspense = false, ...options }: any = {},
) {
    const i = i18n.createInstance();

    const ii = [...backends, initReactI18next].reduce((acc, b) => acc.use(b), i);

    const forcedLocale: string | undefined = locale || defaultLocale;

    ii.init({
        resources,
        ...(forcedLocale && 'autodetect' !== forcedLocale ? { lng: forcedLocale } : {}),
        fallbackLng: fallbackLocale,
        interpolation: {
            escapeValue: false,
        },
        react: {
            useSuspense: suspense,
        },
        ...options,
    });

    return ii;
}

// noinspection JSUnusedGlobalSymbols
export default createI18nFromLocaleAndResources;
