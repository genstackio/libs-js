import { useMemo } from 'react';
import { I18nextProvider } from 'react-i18next';
import { ApolloProvider } from '@ohoareau/apollo-client-jwt';
import { MuiThemeProvider } from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core/styles';
import { TailwindProvider } from '@genstackio/react-contexts/lib/contexts/TailwindContext';
import { importer_function } from '@genstackio/react-contexts';

function GraphqlProvider({ value, children }: any) {
    value && (children = <ApolloProvider client={value}>{children}</ApolloProvider>);
    return children;
}
function TranslationProvider({ value, children }: any) {
    value && (children = <I18nextProvider i18n={value}>{children}</I18nextProvider>);
    return children;
}
function ThemeProvider({ value, children }: any) {
    value && value.mui && (children = <MuiThemeProvider theme={value.mui}>{children}</MuiThemeProvider>);
    value && value.tailwind && (children = <TailwindProvider value={value.tailwind}>{children}</TailwindProvider>);
    return children;
}

export function useApp({
    importer,
    app: { prefix, endpoint, locales, defaultLocale, fallbackLocale },
    routes = [],
    translations = {},
    theme: { mui = {}, tailwind = {} } = {},
    queries = {},
}: {
    importer: importer_function;
    app: any;
    theme?: any;
    routes?: any[];
    translations?: any;
    queries?: any;
}) {
    return useMemo(
        () => ({
            prefix,
            importer,
            translations,
            queries,
            graphqlProvider: GraphqlProvider,
            translationProvider: TranslationProvider,
            themeProvider: ThemeProvider,
            routes: routes,
            theme: {
                mui: createMuiTheme(mui),
                tailwind,
            },
            apiOptions: {
                uri: endpoint,
            },
            locales,
            defaultLocale,
            fallbackLocale,
        }),
        [prefix, endpoint, defaultLocale, fallbackLocale, locales, routes, translations, queries],
    );
}

export default useApp;
