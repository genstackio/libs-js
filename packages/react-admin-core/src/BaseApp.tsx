import { ComponentType, useMemo } from 'react';
import DefaultErrorScreen from './screens/DefaultErrorScreen';
import { BrowserRouter as Router } from 'react-router-dom';
import { route } from './types';
import {
    app_importer_function,
    AppProvider,
    importer_context_params,
    useAppContext,
    importers,
    logos_context_value
} from '@genstackio/react-contexts';
import coreTranslations from './configs/translations';
import adminUiTranslations from '@genstackio/react-admin-ui/lib/configs/translations';
import Routes from "./Routes";
import Route from "./Route";
import {ambiance_context_value} from "@genstackio/react-contexts/lib/types";
import Loadable from "@loadable/component";

// warning: we create default values (objects) here to avoid react re-rendering with always-different-objects
const defaultTranslations = {};
const defaultRoutes = [];
const defaultQueries = {};
const defaultCallbacks = {};
const defaultApiOptions = {};
const defaultThemes = {};
const defaultTheme = {};
const defaultLocales = ['en-US'];

const defaultImporters = {
    layout: ({path}: {path: string}) => Loadable(() => import(`@genstackio/react-admin-core/lib/layouts/${path}Layout`)),
    screen: ({path}: {path: string}) => Loadable(() => import(`@genstackio/react-admin-core/lib/screens/${path}Screen`)),
    form: ({path}: {path: string}) => Loadable(() => import(`@genstackio/react-admin-core/lib/forms/${path}Form`)),
    action: ({path}: {path: string}) => Loadable(() => import(`@genstackio/react-admin-core/lib/actions/${path}Action`)),
    form_field: ({path}: {path: string}) => Loadable(() => import(`@genstackio/react-admin-ui/lib/atoms/fields/${path}Field`)),
    content: ({path}: {path: string}) => Loadable(() => import(`@genstackio/react-admin-ui/lib/contents/${path}Content`)),
    screen_template: ({path}: {path: string}) => Loadable(() => import(`@genstackio/react-admin-core/lib/templates/screens/${path}ScreenTemplate`)),
};

function pathize(name: string) {
    let [a, b] = name.split(/\//g);
    name = `${a.slice(0, 1).toUpperCase()}${a.slice(1)}`;
    if (b) {
        a = `${a.slice(0, 1).toLowerCase()}${a.slice(1)}`;
        b = `${b.slice(0, 1).toUpperCase()}${b.slice(1)}`;
        name = `${a}/${b}`;
    }
    return name.split(/_/g).map((s: string, index: number) => {
        if (0 === index) return s;
        return `${s.slice(0, 1).toUpperCase()}${s.slice(1)}`;
    }).join('');
}

function buildImporter(importer?: importer_context_params, importers?: importers) {
    if (!importer) {
        if (!importers) return (name: string, key: string) => {
            const y = {name, path: pathize(name)};
            const x2: app_importer_function = (defaultImporters as any)[key];
            if (x2) return x2(y);
            return undefined;
        };
        return (name: string, key: string) => {
            const y = {name, path: pathize(name)};
            const zz = (importers as any)[key] || [undefined, []];
            if (!!zz && Array.isArray(zz) && (zz.length >= 1)) {
                const [x, names = []]: [app_importer_function, string[]] = zz as [any, any];
                if ((names.includes(name) || names.includes('*')) && x) return Loadable(() => x(y));
            }
            const x2: app_importer_function = (defaultImporters as any)[key];
            if (x2) return x2(y);
            return undefined;
        }
    } else if (!importers) {
        return importer;
    }
    return (name: string, key: string) => {
        const y = {name, path: pathize(name)};
        const zz = (importers as any)[key] || [undefined, []];
        if (!!zz && Array.isArray(zz) && (zz.length >= 1)) {
            const [x, names = []]: [app_importer_function, string[]] = zz as [any, any];
            if ((names.includes(name) || names.includes('*')) && x) return Loadable(() => x(y));
        }
        return importer;
    }
}

export function BaseApp({
    prefix = 'app',
    routes = defaultRoutes,
    importer,
    importers,
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
    upload = undefined,
    ambiance = undefined,
    logos = undefined,
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
        upload: uploadValue,
        ambiance: ambianceValue,
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
        upload,
        ambiance,
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
            importers={importers}
            locales={computedLocales}
            upload={uploadValue}
            ambiance={ambianceValue}
            importerBuilder={buildImporter}
            logos={logos}
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
    ambiance?: ambiance_context_value;
    logos?: logos_context_value;
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
