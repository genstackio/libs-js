import { ComponentType, LazyExoticComponent } from 'react';

export type storage = {
    setItem: Function;
    getItem: Function;
    hasItem: Function;
    removeItem: Function;
};

export type decoded_token = {
    id: string;
    email: string;
};

export type user = {
    token?: string;
    refreshToken?: string;
    id?: string;
    email?: string;
    [key: string]: any;
};

export type user_tokens = {
    token: string;
    refreshToken: string;
};

export type cart = {
    items?: cart_item[];
};

export type cart_item = {
    id: string;
    quantity: number;
    currency: string;
    price: number;
    name?: string;
    type?: string;
};

export type user_context_value = {
    user: user | undefined;
    setUser: (user) => any | undefined;
    logout: () => any | undefined;
    refreshUser: () => any | undefined;
    setTokens: (user_tokens) => any | undefined;
    getTokens: () => user_tokens | undefined;
};

export type cart_context_value = {
    cart: cart | undefined;
    setCart: (cart) => any | undefined;
    resetCart: () => any | undefined;
};

export type box_context_value = {
    color: string | undefined;
    variant: string | undefined;
};

export type navigation_context_value = {
    InternalLink: ComponentType;
    ExternalLink: ComponentType;
    goHome?: Function;
    goLogin?: Function;
    goUserHome?: Function;
    goCart?: Function;
    goCheckout?: Function;
    goPageByModel?: Function;
    homeLocation?: string;
    loginLocation?: string;
    userHomeLocation?: string;
    cartLocation?: string;
    checkoutLocation?: string;
};

export type language = {
    id: string;
    label?: any;
    target?: any;
};

export type sections_context_value = {
    section: string | undefined;
    sections: { id: string; label?: any; target?: any; selected?: boolean }[];
    allSections: { id: string; label?: any; target?: any }[];
    detectedSections: { id: string; selected?: boolean }[];
};

export type locale = {
    id: string;
    label: string;
};

export type locales_context_value = {
    default: string | undefined;
    fallback: string | undefined;
    locales: locale[];
};

export type image = {
    url: string;
    alt: string;
};

export type image_getter = (key: string) => image | undefined;

export type images_context_value = {
    get?: image_getter;
};

export type page_context_value = {
    uid: string;
    lang: string;
};

export type fullscreen_context_value = {
    active: boolean;
    enter: () => Promise<void>;
    exit: () => Promise<void>;
};

export type theme = { [key: string]: any };
export type themes = { default: theme; [key: string]: theme };

export type app_context_params = {
    storageKeyFactory?: (k: string) => string;
    themes?: any;
    theme?: any;
    queries?: any;
    callbacks?: any;
    translations?: any;
    locales?: locale[];
    defaultLocale?: string;
    fallbackLocale?: string;
    getImage?: image_getter;
    apiOptions?: any;
    fullscreen?: fullscreen_context_value;
};

export type importer_function = (name: string, key: string) => LazyExoticComponent<ComponentType<any>> | undefined;
export type importer_context_params = undefined | importer_function;
