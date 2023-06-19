import translations from '../configs/translations';
import mergeI18nResources from './mergeI18nResources';
import createI18nFromLocaleAndResources from '@genstackio/react-i18n/lib/utils/createI18nFromLocaleAndResources';

const defaultLocale = 'fr-FR';
const defaultFallbackLocale = 'fr-FR';

export function i18nFactory({
    fallbackLng = undefined,
    lng = undefined,
    resources = undefined,
    backends = undefined,
    options = {},
}: {
    fallbackLng?: string;
    lng?: string;
    resources?: any;
    backends?: any[];
    options?: any;
}) {
    return createI18nFromLocaleAndResources(
        lng || defaultLocale,
        mergeI18nResources(resources) || translations,
        defaultLocale,
        fallbackLng || defaultFallbackLocale,
        backends,
        { suspense: true, ...options },
    );
}

export default i18nFactory;
