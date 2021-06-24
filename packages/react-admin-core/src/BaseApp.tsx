import { ComponentType, Suspense, useMemo } from 'react';
import Route from './Route';
import DefaultLoadingScreen from './screens/DefaultLoadingScreen';
import DefaultErrorScreen from './screens/DefaultErrorScreen';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { route } from './types';
import { AppProvider, useAppContext } from '@genstackio/react-contexts';
import coreTranslations from './configs/translations';
import adminUiTranslations from '@genstackio/react-admin-ui/lib/configs/translations';

export function BaseApp({
    prefix = 'app',
    routes = [],
    screenImporter,
    loadingComponent: LoadingComponent = undefined,
    translations = {},
    queries = {},
}: BaseAppProps) {
    const LoadingScreen = LoadingComponent || DefaultLoadingScreen;
    const computedTranslations = useMemo(
        () => [...(Array.isArray(translations) ? translations : [translations]), coreTranslations, adminUiTranslations],
        [translations],
    );
    const { api, baseTheme, cart, client, i18n, navigation, storage, user } = useAppContext({
        storageKeys: {
            user: `${prefix}_user`,
            cart: `${prefix}_cart`,
            locale: `${prefix}_locale`,
        },
        themes: {},
        muiTheme: {},
        queries,
        translations: computedTranslations,
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
        >
            <Router>
                <Suspense fallback={<LoadingScreen />}>
                    <Switch>
                        {routes.map((route, i) => (
                            <Route screenImporter={screenImporter} key={i} {...route} user={user.user} />
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
    screenImporter?: (name: string) => any;
    loadingComponent?: ComponentType;
    queries?: any,
    translations?:
        | { [key: string]: { [key: string]: { [key: string]: string } } }
        | { [key: string]: { [key: string]: { [key: string]: string } } }[];
}

export default BaseApp;
