import { ReactNode } from 'react';
import ErrorBoundary from './ErrorBoundary';
import { StorageProvider } from './contexts/StorageContext';
import { LocationProvider } from './contexts/LocationContext';
import { ApiProvider } from './contexts/ApiContext';
import { UserProvider } from './contexts/UserContext';
import { CartProvider } from './contexts/CartContext';
import { NavigationProvider } from './contexts/NavigationContext';
import { LocalesProvider } from './contexts/LocalesContext';
import { ImagesProvider } from './contexts/ImagesContext';
import { ImporterProvider } from './contexts/ImporterContext';
import {images_context_value, importer_context_params, locales_context_value} from './types';

export function AppProvider({
    themeProvider: ThemeProvider,
    translationProvider: TranslationProvider,
    graphqlProvider: GraphqlProvider,
    locales,
    images,
    error,
    storage,
    location,
    graphql,
    theme,
    translation,
    api,
    cart,
    user,
    navigation,
    children,
    importer,
}: AppProviderProps) {
    let content = children || '';
    importer && (content = <ImporterProvider value={importer}>{content}</ImporterProvider>);
    navigation && (content = <NavigationProvider value={navigation}>{content}</NavigationProvider>);
    user && (content = <UserProvider value={user}>{content}</UserProvider>);
    cart && (content = <CartProvider value={cart}>{content}</CartProvider>);
    api && (content = <ApiProvider value={api}>{content}</ApiProvider>);
    graphql && GraphqlProvider && (content = <GraphqlProvider value={graphql}>{content}</GraphqlProvider>);
    images && (content = <ImagesProvider value={images}>{content}</ImagesProvider>);
    locales && (content = <LocalesProvider value={locales}>{content}</LocalesProvider>);
    theme && ThemeProvider && (content = <ThemeProvider value={theme}>{content}</ThemeProvider>);
    translation &&
        TranslationProvider &&
        (content = <TranslationProvider value={translation}>{content}</TranslationProvider>);
    location && (content = <LocationProvider value={location}>{content}</LocationProvider>);
    storage && (content = <StorageProvider value={storage}>{content}</StorageProvider>);

    return <ErrorBoundary component={error}>{content}</ErrorBoundary>;
}

export interface AppProviderProps {
    themeProvider?: any;
    translationProvider?: any;
    graphqlProvider?: any;
    locales?: locales_context_value;
    images?: images_context_value;
    error: any;
    storage: any;
    location: any;
    graphql: any;
    theme: any;
    translation: any;
    api: any;
    cart: any;
    user: any;
    navigation: any;
    importer?: importer_context_params;
    children?: ReactNode;
}

export default AppProvider;
