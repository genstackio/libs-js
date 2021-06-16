import i18n from "i18next";
import {initReactI18next} from "react-i18next";
import translations from '../configs/translations';

const defaultLocale = 'fr-FR';
const defaultFallbackLocale = 'fr-FR';

export function i18nFactory({fallbackLng = undefined, lng = undefined, resources = undefined}: {fallbackLng?: string, lng?: string, resources?: any}) {
    const i = i18n.createInstance();
    // noinspection JSIgnoredPromiseFromCall
    i
        .use(initReactI18next)
        .init({
            resources: resources || translations,
            fallbackLng: fallbackLng || defaultFallbackLocale,
            lng: lng || defaultLocale,
            keySeparator: false,
            interpolation: {
                escapeValue: false,
            },
            react: {
                wait: true,
            },
        })
    ;
    return i;
}

export default i18nFactory