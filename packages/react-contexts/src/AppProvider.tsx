import {ReactNode} from 'react';
import ErrorBoundary from './ErrorBoundary';
import {StorageProvider, LocationProvider, ApiProvider, UserProvider, CartProvider, NavigationProvider} from './contexts';

export function AppProvider({themeProvider: ThemeProvider, translationProvider: TranslationProvider, graphqlProvider: GraphqlProvider, error, storage, location, graphql, theme, translation, api, cart, user, navigation, children}: AppProviderProps) {
    let content = children || '';
    navigation && (content = <NavigationProvider value={navigation}>{content}</NavigationProvider>);
    user && (content = <UserProvider value={user}>{content}</UserProvider>);
    cart && (content = <CartProvider value={cart}>{content}</CartProvider>);
    theme && ThemeProvider && (content = <ThemeProvider value={theme}>{content}</ThemeProvider>);
    translation && TranslationProvider && (content = <TranslationProvider value={translation}>{content}</TranslationProvider>);
    api && (content = <ApiProvider value={api}>{content}</ApiProvider>);
    graphql && (content = <GraphqlProvider value={graphql}>{content}</GraphqlProvider>);
    location && (content = <LocationProvider value={location}>{content}</LocationProvider>);
    storage && (content = <StorageProvider value={storage}>{content}</StorageProvider>);

    return (
        <ErrorBoundary component={error}>{content}</ErrorBoundary>
    );
}

export interface AppProviderProps {
    themeProvider?: any,
    translationProvider?: any,
    graphqlProvider?: any,
    error: any,
    storage: any,
    location: any,
    graphql: any,
    theme: any,
    translation: any,
    api: any,
    cart: any,
    user: any,
    navigation: any,
    children?: ReactNode,
}

export default AppProvider