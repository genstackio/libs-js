import { ComponentType, Suspense, useMemo } from 'react';
import Route from './Route';
import DefaultLoadingScreen from './screens/DefaultLoadingScreen';
import DefaultErrorScreen from './screens/DefaultErrorScreen';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { route } from './types';
import { AppProvider, importer_context_params, useAppContext } from '@genstackio/react-contexts';
import coreTranslations from './configs/translations';
import adminUiTranslations from '@genstackio/react-admin-ui/lib/configs/translations';

export function BaseApp({
    prefix = 'app',
    routes = [],
    importer,
    loadingComponent: LoadingComponent = undefined,
    translations = {},
    queries = {},
    callbacks = {},
    apiOptions = {},
    themes = {},
    theme = {},
    locales = ['en-US'],
    defaultLocale = undefined,
    fallbackLocale = undefined,
    requiredRoles = undefined,
    ...props
}: BaseAppProps) {
    defaultLocale = defaultLocale || locales[0];
    fallbackLocale = fallbackLocale || locales[0];
    const LoadingScreen = LoadingComponent || DefaultLoadingScreen;
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
                <Suspense fallback={<LoadingScreen />}>
                    <Switch>
                        {routes.map((route, i) => (
                            <Route key={i} {...route} requiredRoles={route['requiredRoles'] || requiredRoles} user={user.user} />
                        ))}
                    </Switch>
                </Suspense>
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

export default BaseApp;
