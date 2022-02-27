import { useMemo } from 'react';
import { I18nextProvider } from 'react-i18next';
import { ApolloProvider } from '@ohoareau/apollo-client-jwt';
import { MuiThemeProvider } from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core/styles';
import { TailwindProvider } from '@genstackio/react-contexts/lib/contexts/TailwindContext';
import {importer_function, request_upload_infos} from '@genstackio/react-contexts';
import { FullscreenProvider as BaseFullscreenProvider } from '@genstackio/react-contexts/lib/contexts/FullscreenContext';
import { FullScreen } from 'react-full-screen';
import IconsProvider from '@genstackio/react-contexts/lib/IconsProvider';

function GraphqlProvider({ value, children }: any) {
    value && (children = <ApolloProvider client={value}>{children}</ApolloProvider>);
    return children;
}
function TranslationProvider({ value, children }: any) {
    value && (children = <I18nextProvider i18n={value}>{children}</I18nextProvider>);
    return children;
}
function FullscreenProvider({ value, children }: any) {
    value &&
        (children = (
            <FullScreen handle={value}>
                <BaseFullscreenProvider value={value}>{children}</BaseFullscreenProvider>
            </FullScreen>
        ));
    return children;
}

function ThemeProvider({ value, children }: any) {
    value && value.mui && (children = <MuiThemeProvider theme={value.mui}>{children}</MuiThemeProvider>);
    value && value.tailwind && (children = <TailwindProvider value={value.tailwind}>{children}</TailwindProvider>);
    value &&
        value.theme &&
        value.theme !== 'default' &&
        (children = (
            <div className={'theme-' === value.theme.slice(0, 6) ? value.theme : `theme-${value.theme}`}>
                {children}
            </div>
        ));
    return children;
}

// warning: we create default values (objects) here to avoid react re-rendering with always-different-objects
const defaultFeatures = {};
const defaultMui = {};
const defaultTailwind = {};
const defaultQueries = {};
const defaultRoutes = [];
const defaultTranslations = {};
const defaultIcons = {};
const defaultTheme = {};

export function useApp({
    importer,
    app: { prefix, endpoint, locales, defaultLocale, fallbackLocale, features, requiredRoles },
    routes = undefined,
    translations = undefined,
    theme: { mui = undefined, tailwind = undefined, theme = undefined } = defaultTheme,
    queries = undefined,
    icons = undefined,
    uploader = undefined,
    apiOptions = undefined,
}: {
    importer: importer_function;
    app: any;
    theme?: any;
    routes?: any[];
    translations?: any;
    queries?: any;
    icons?: { fa?: any[] };
    uploader?: request_upload_infos;
    apiOptions?: any;
}) {
    translations = translations || defaultTranslations;
    routes = routes || defaultRoutes;
    queries = queries || defaultQueries;
    mui = mui || defaultMui;
    features = features || defaultFeatures;
    tailwind = tailwind || defaultTailwind;
    icons = icons || defaultIcons;

    return useMemo(
        () => ({
            prefix,
            importer,
            translations,
            queries,
            graphqlProvider: GraphqlProvider,
            translationProvider: TranslationProvider,
            themeProvider: ThemeProvider,
            fullscreenProvider: FullscreenProvider,
            iconsProvider: IconsProvider,
            routes: routes,
            theme: {
                mui: createMuiTheme(mui),
                tailwind,
                theme: theme || undefined,
            },
            apiOptions: {
                uri: endpoint,
                ...apiOptions,
            },
            locales,
            defaultLocale,
            fallbackLocale,
            darkMode: features.darkMode ? { mode: 'default' } : undefined,
            messages: features.messages ? { messages: [] } : undefined,
            notifications: features.notifications ? { notifications: [] } : undefined,
            favorites: features.favorites ? { favorites: [] } : undefined,
            icons,
            requiredRoles,
            upload: uploader,
        }),
        [
            mui,
            theme,
            tailwind,
            prefix,
            endpoint,
            defaultLocale,
            fallbackLocale,
            locales,
            routes,
            translations,
            queries,
            icons,
            requiredRoles,
            features,
            uploader,
            apiOptions,
        ],
    );
}

// noinspection JSUnusedGlobalSymbols
export default useApp;
