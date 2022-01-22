import { ComponentType, useMemo } from 'react';
import DefaultErrorScreen from './screens/DefaultErrorScreen';
import { BrowserRouter as Router } from 'react-router-dom';
import { route } from './types';
import { AppProvider, importer_context_params, useAppContext } from '@genstackio/react-contexts';
import coreTranslations from './configs/translations';
import adminUiTranslations from '@genstackio/react-admin-ui/lib/configs/translations';
import Routes from "./Routes";
import Route from "./Route";

// warning: we create default values (objects) here to avoid react re-rendering with always-different-objects
const defaultTranslations = {};
const defaultRoutes = [];
const defaultQueries = {};
const defaultCallbacks = {};
const defaultApiOptions = {};
const defaultThemes = {};
const defaultTheme = {};
const defaultLocales = ['en-US'];

export function BaseApp({
    prefix = 'app',
    routes = defaultRoutes,
    importer,
    loadingComponent = undefined,
    translations = undefined,
    queries = defaultQueries,
    callbacks = defaultCallbacks,
    apiOptions = defaultApiOptions,
    themes = defaultThemes,
    theme = defaultTheme,
    locales = defaultLocales,
    defaultLocale = undefined,
    fallbackLocale = undefined,
    requiredRoles = undefined,
    ...props
}: BaseAppProps) {
    translations = translations || defaultTranslations;
    defaultLocale = defaultLocale || locales[0];
    fallbackLocale = fallbackLocale || locales[0];
    const computedTranslations = useMemo(
        () => [...(Array.isArray(translations) ? translations : [translations]), coreTranslations, adminUiTranslations],
        [translations],
    );
    const {
        api,
        baseTheme,
        cart,
        client,
        i18n,
        navigation,
        storage,
        user,
        locales: computedLocales,
    } = useAppContext({
        storageKeyFactory: (k: string) => `${prefix}_${k}`,
        apiOptions,
        themes,
        theme,
        queries,
        callbacks,
        translations: computedTranslations,
        locales: locales.map((l) => ({
            id: l,
            label: `locale_${(l || 'unknown').replace('-', '_').toLowerCase()}`,
        })),
        defaultLocale,
        fallbackLocale,
    });
    return (
        <AppProvider
            error={DefaultErrorScreen}
            storage={storage}
            location={location}
            translation={i18n}
            theme={baseTheme}
            api={api}
            cart={cart}
            user={user}
            graphql={client}
            navigation={navigation}
            importer={importer}
            locales={computedLocales}
            {...props}
        >
            <Router>
                <Routes loadingComponent={loadingComponent}>
                    {(routes || []).map((route, i) => (
                        <Route key={i} {...route} requiredRoles={route['requiredRoles'] || requiredRoles} user={user?.user} loadingComponent={loadingComponent} />
                    ))}
                </Routes>
            </Router>
        </AppProvider>
    );
}

export interface BaseAppProps {
    prefix?: string;
    routes?: route[];
    importer?: importer_context_params;
    loadingComponent?: ComponentType;
    queries?: any;
    callbacks?: any;
    apiOptions?: any;
    themes?: any;
    theme?: any;
    translations?:
        | { [key: string]: { [key: string]: { [key: string]: string } } }
        | { [key: string]: { [key: string]: { [key: string]: string } } }[];
    locales?: string[];
    defaultLocale?: string;
    fallbackLocale?: string;
    [key: string]: any;
}

// noinspection JSUnusedGlobalSymbols
export default BaseApp;
