import {useMemo} from 'react';
import {I18nextProvider} from 'react-i18next';
import {ApolloProvider} from "@ohoareau/apollo-client-jwt";
import {MuiThemeProvider} from "@material-ui/core";

function GraphqlProvider({value, children}: any) {
    return <ApolloProvider client={value}>{children}</ApolloProvider>;
}
function TranslationProvider({value, children}: any) {
    return <I18nextProvider i18n={value}>{children}</I18nextProvider>;
}
function ThemeProvider({value, children}: any) {
    return <MuiThemeProvider theme={value}>{children}</MuiThemeProvider>;
}

export function useApp({screenImporter, app, routes = [], translations = {}, queries = {}}: {screenImporter: (key: string) => any, app: any, routes?: any[], translations?: any, queries?: any}) {
    return useMemo(() => ({
        prefix: app.prefix,
        screenImporter,
        translations,
        queries,
        graphqlProvider: GraphqlProvider,
        translationProvider: TranslationProvider,
        themeProvider: ThemeProvider,
        routes: routes,
        apiOptions: {
            uri: app.endpoint,
        },
    }), [app, routes, translations, queries]);
}

export default useApp
