import buildI18nResources from './buildI18nResources';
import createI18nFromLocaleAndResources from './createI18nFromLocaleAndResources';

const defaultAlwaysLoadedLocales = ['en_US'];
const defaultDefaultLocale = 'fr_FR';
const defaultFallbackLocale = 'fr_FR';

export function createI18nFactory(
    config: { defaultLocale?: string; fallbackLocale?: string },
    resourceFn: Function,
    backendsFn?: Function,
    optionsFn?: Function,
) {
    config = { ...config };
    !config.defaultLocale && (config.defaultLocale = defaultDefaultLocale);
    !config.fallbackLocale && (config.fallbackLocale = defaultFallbackLocale);
    return (locale?: string, mode?: string) => {
        const resources = buildI18nResources(
            [config.defaultLocale, config.fallbackLocale, locale, ...defaultAlwaysLoadedLocales],
            resourceFn,
        );
        const ctx = { ...config, locale, mode, resources };
        const backends = (backendsFn ? backendsFn(ctx) : undefined) || [];
        const options = (optionsFn ? optionsFn({ ...ctx, backends }) : undefined) || {};

        return createI18nFromLocaleAndResources(
            locale,
            resources,
            config.defaultLocale,
            config.fallbackLocale!,
            backends,
            options,
        );
    };
}

export default createI18nFactory;
