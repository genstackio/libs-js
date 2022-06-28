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
import { DarkModeProvider } from './contexts/DarkModeContext';
import { NotificationsProvider } from './contexts/NotificationsContext';
import { MessagesProvider } from './contexts/MessagesContext';
import { FavoritesProvider } from './contexts/FavoritesContext';
import { UploadProvider } from './contexts/UploadContext';
import { AmbianceProvider } from './contexts/AmbianceContext';
import {
    dark_mode_context_value,
    favorites_context_value,
    icons_context_value,
    images_context_value,
    importer_context_params,
    locales_context_value,
    messages_context_value,
    notifications_context_value, upload_context_value, ambiance_context_value,
} from './types';

export function AppProvider({
    themeProvider: ThemeProvider,
    translationProvider: TranslationProvider,
    graphqlProvider: GraphqlProvider,
    fullScreenProvider: FullscreenProvider,
    iconsProvider: IconsProvider,
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
    fullscreen,
    favorites,
    notifications,
    messages,
    darkMode,
    icons,
    upload,
    ambiance,
}: AppProviderProps) {
    let content = children || '';
    icons && IconsProvider && (content = <IconsProvider value={icons}>{content}</IconsProvider>);
    favorites && (content = <FavoritesProvider value={favorites}>{content}</FavoritesProvider>);
    notifications && (content = <NotificationsProvider value={notifications}>{content}</NotificationsProvider>);
    messages && (content = <MessagesProvider value={messages}>{content}</MessagesProvider>);
    darkMode && (content = <DarkModeProvider value={darkMode}>{content}</DarkModeProvider>);
    upload && (content = <UploadProvider value={upload}>{content}</UploadProvider>);
    fullscreen &&
        FullscreenProvider &&
        (content = <FullscreenProvider value={fullscreen}>{content}</FullscreenProvider>);
    importer && (content = <ImporterProvider value={importer}>{content}</ImporterProvider>);
    navigation && (content = <NavigationProvider value={navigation}>{content}</NavigationProvider>);
    user && (content = <UserProvider value={user}>{content}</UserProvider>);
    cart && (content = <CartProvider value={cart}>{content}</CartProvider>);
    api && (content = <ApiProvider value={api}>{content}</ApiProvider>);
    graphql && GraphqlProvider && (content = <GraphqlProvider value={graphql}>{content}</GraphqlProvider>);
    images && (content = <ImagesProvider value={images}>{content}</ImagesProvider>);
    locales && (content = <LocalesProvider value={locales}>{content}</LocalesProvider>);
    theme && ThemeProvider && (content = <ThemeProvider value={theme}>{content}</ThemeProvider>);
    ambiance && (content = <AmbianceProvider value={ambiance}>{content}</AmbianceProvider>);
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
    fullScreenProvider?: any;
    iconsProvider?: any;
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
    fullscreen?: any;
    icons?: icons_context_value;
    messages?: messages_context_value;
    notifications?: notifications_context_value;
    favorites?: favorites_context_value;
    darkMode?: dark_mode_context_value;
    upload?: upload_context_value;
    children?: ReactNode;
    ambiance?: ambiance_context_value;
}

// noinspection JSUnusedGlobalSymbols
export default AppProvider;
