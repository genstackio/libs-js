import { useCallback, useMemo, useState } from 'react';
import formatLng from '../utils/formatLng';
import createClient, { gql, jwtDecode, useLazyQuery, useMutation, useQuery } from '@ohoareau/apollo-client-jwt';
import {
    decoded_token,
    user,
    storage,
    cart,
    user_context_value,
    locales_context_value,
    images_context_value,
    app_context_params,
} from '../types';
import MuiLink from '@material-ui/core/Link';
import fetch from 'isomorphic-fetch';
import mergeCartItems from '../utils/mergeCartItems';
import i18nFactory from '../utils/i18nFactory';

export function useAppContext({
    storageKeys,
    themes,
    muiTheme,
    queries,
    translations,
    locales,
    defaultLocale = 'en-US',
    fallbackLocale = 'en-US',
    getImage,
}: app_context_params) {
    const { theme = 'default' } = {};
    const lang = defaultLocale; // @todo detect from localeStorage for instance
    const storage = useMemo<storage | undefined>(() => {
        const s = 'undefined' === typeof localStorage ? undefined : localStorage;
        if (!s) return undefined;
        return {
            setItem: (key: string, value: any) => {
                if (!value) return s.removeItem(key);
                return s.setItem(key, JSON.stringify(value));
            },
            getItem: (key: string) => {
                const v = s.getItem(key);
                return v && 'undefined' !== v ? JSON.parse(v) : undefined;
            },
            hasItem: (key: string) => s.hasItem(key),
            removeItem: (key: string) => s.removeItem(key),
        };
    }, []);
    const fetchUserFromLocalStorage = useCallback(() => storage?.getItem(storageKeys.user), [storage]);
    const fetchCartFromLocalStorage = useCallback(() => storage?.getItem(storageKeys.cart), [storage]);
    const [user, setUser] = useState<user | undefined>(fetchUserFromLocalStorage);
    const [cart, setCart] = useState<cart | undefined>(fetchCartFromLocalStorage);

    const locale = lang;
    const enrichedSetCart = useCallback(
        (cart) => {
            const localStorageCart = fetchCartFromLocalStorage();
            let mergedCart: cart;
            if (localStorageCart) {
                const { items: oldItems, ...oldCart }: cart = fetchCartFromLocalStorage();
                const { items: newItems, ...newCart } = cart;
                const mergedItems = mergeCartItems(newItems, oldItems);
                mergedCart = { ...oldCart, ...newCart, items: mergedItems };
            } else {
                mergedCart = cart;
            }
            storage?.setItem(storageKeys.cart, mergedCart);
            setCart(cart);
        },
        [storage, setCart, fetchCartFromLocalStorage],
    );

    const enrichedSetUser = useCallback(
        (user) => {
            storage?.setItem(storageKeys.user, user);
            setUser(user);
        },
        [storage, setUser],
    );

    const resetCart = useCallback(() => {
        storage?.removeItem(storageKeys.cart);
        setCart(undefined);
    }, [storage, setCart]);

    const getCurrentTokens = useCallback(() => {
        const u = fetchUserFromLocalStorage();
        return u
            ? {
                  token: u.token,
                  refreshToken: u.refreshToken,
              }
            : {};
    }, [fetchUserFromLocalStorage]) as any;

    const api: any = { client: undefined };

    const getQuery = useCallback((name: string) => {
        if (!queries || !(queries[name] || queries['*']))
            throw new Error(`No query available for '${name}'`);
        if ('function' !== typeof (queries[name] || queries['*']))
            throw new Error(`Query must be a function for '${name}'`);
        return (queries[name] || queries['*'])(gql);
    }, [queries]);

    const refreshUser = useCallback(async () => {
        const r = await api.client!.query({ query: getQuery('GET_CURRENT_USER') });
        if (!r || !r.data || !r.data.getCurrentUser) throw new Error('Unable to retrieve current user');
        await enrichedSetUser({ ...fetchUserFromLocalStorage(), ...r.data.getCurrentUser });
    }, [api, enrichedSetUser, fetchUserFromLocalStorage]) as any;

    const setCurrentTokens = useCallback(
        async (tokens: any) => {
            const u = (await jwtDecode(tokens.token)) as decoded_token;
            await enrichedSetUser({ ...u, token: tokens.token, refreshToken: tokens.refreshToken });
            await refreshUser();
        },
        [enrichedSetUser, refreshUser],
    ) as any;

    const onLogout = useCallback(async () => {
        await enrichedSetUser(undefined);
    }, [enrichedSetUser]) as any;

    const apiProviderValue: any = useMemo<{
        getQuery: Function;
        useMutation: Function;
        useQuery: Function;
        useLazyQuery: Function;
    }>(() => ({ getQuery, useMutation, useQuery, useLazyQuery }), []);
    const cartProviderValue: any = useMemo<{ cart: cart | undefined; setCart: Function; resetCart: Function }>(
        () => ({ cart: fetchCartFromLocalStorage(), setCart: enrichedSetCart, resetCart }),
        [cart, enrichedSetCart, resetCart],
    );
    const userProviderValue: any = useMemo<user_context_value>(
        () => ({
            user: fetchUserFromLocalStorage(),
            setUser: enrichedSetUser,
            getTokens: getCurrentTokens,
            setTokens: setCurrentTokens,
            logout: onLogout,
            refreshUser,
        }),
        [fetchUserFromLocalStorage, user, enrichedSetUser, setCurrentTokens, getCurrentTokens, onLogout, refreshUser],
    );
    const navigationProviderValue: any = useMemo(
        () => ({
            InternalLink: MuiLink,
            ExternalLink: MuiLink,
        }),
        [MuiLink],
    );

    const refreshTokens = useCallback(async (refreshToken: string, client: { mutate: Function }) => {
        const r = await client.mutate({ mutation: getQuery('REFRESH_LOGIN'), variables: { data: { refreshToken } } });
        if (!r || !r.data || !r.data.refreshAuthToken) throw new Error('Unable to refresh auth token');
        return {
            token: r.data.refreshAuthToken.token,
            refreshToken: r.data.refreshAuthToken.refreshToken,
        };
    }, []);

    api.client = useMemo(() => {
        return createClient({
            fetch,
            getCurrentTokens,
            setCurrentTokens,
            refreshTokens,
            onLogout,
            onAuthError: onLogout,
            uri: process.env.GRAPHQL_API_ENDPOINT,
            timeout: 5000,
        });
    }, [getCurrentTokens, setCurrentTokens, refreshTokens, onLogout]);

    const themeFactory = useCallback(
        (old: any = {}) => ({
            ...old,
            ...((themes as any)[theme] || {}),
        }),
        [themes, theme],
    );

    const i18n = useMemo(() => {
        return i18nFactory({ lng: formatLng(locale), resources: translations });
    }, [i18nFactory, locale, translations]);

    const localesProviderValue: locales_context_value = useMemo(
        () => ({ locales: locales || [], default: defaultLocale, fallback: fallbackLocale }),
        [locales, defaultLocale, fallbackLocale],
    );
    // noinspection JSUnusedLocalSymbols
    const imagesProviderValue: images_context_value = useMemo(
        () => ({ get: getImage || ((key: string) => undefined) }),
        [locales, defaultLocale, fallbackLocale],
    );

    return {
        client: api.client,
        i18n,
        baseTheme: muiTheme,
        pageTheme: themeFactory,
        storage,
        locale,
        user: userProviderValue,
        api: apiProviderValue,
        cart: cartProviderValue,
        navigation: navigationProviderValue,
        locales: localesProviderValue,
        images: imagesProviderValue,
        themes,
    };
}

export default useAppContext;
