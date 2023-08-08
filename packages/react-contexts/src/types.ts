import { ComponentType, LazyExoticComponent } from 'react';

export type expression_context_value = {
    eval: (expression: any, data: any) => any;
};
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

export type table_context_value = {
    renderers?: Record<string, table_context_renderer>;
    cellComponents?: Record<string, table_context_cellcomponent>;
};
export type table_context_renderer = (col: any) => (params: any) => any;
export type table_context_cellcomponent = any;

export type user_context_value = {
    user: user | undefined;
    setUser: (user) => any | undefined;
    logout: () => any | undefined;
    refreshUser: () => any | undefined;
    setTokens: (user_tokens) => any | undefined;
    getTokens: () => user_tokens | undefined;
};

export type login_context_value = {
    actionProps?: any;
    formProps?: any;
    templateProps?: any;
    actionComponent?: any;
    formComponent?: any;
    templateComponent?: any;
    layout?: string;
    map?: (response: any) => any;
    propagate?: (data: any, { setCurrentUserTokens: Function }) => void;
    succeed?: (
        data: any,
        ctx: { onLoginSuccess: (data: any) => void; setCurrentUserTokens: (tokens: any) => void },
    ) => void;
};

export type drawer_context_value = {
    opened: boolean;
    setOpened: (state: boolean) => void;
    toggle: () => void;
    setData: (data: any | undefined) => void;
    setDataAndOpened: (data: any | undefined, opened: boolean) => void;
    getData: () => any | undefined;
    reset: () => void;
    unsetData: () => void;
    close: () => void;
    open: (view?: string) => void;
    data: any | undefined;
    openWithData: (data: any | undefined, view?: string) => void;
    view: string | undefined;
};

export type register_context_value = {
    actionProps?: any;
    formProps?: any;
    templateProps?: any;
    actionComponent?: any;
    formComponent?: any;
    templateComponent?: any;
    layout?: string;
    map?: (response: any) => any;
    propagate?: (data: any, { setCurrentUserTokens: Function }) => void;
    succeed?: (
        data: any,
        ctx: { onRegisterSuccess: (data: any) => void; setCurrentUserTokens: (tokens: any) => void },
    ) => void;
};

export type cart_context_value = {
    cart: cart | undefined;
    setCart: (cart) => any | undefined;
    resetCart: () => any | undefined;
};

export type validator_sync = (config: Record<string, any>) => (value: any, allValues: any) => boolean | string;
export type validator_async = (
    config: Record<string, any>,
) => (value: any, allValues: any) => Promise<boolean | string>;
export type validator = validator_sync | validator_async;
export type validators_context_value = Record<string, validator>;

export type box_context_value = {
    color: string | undefined;
    variant: string | undefined;
};

export type fields_context_value = {
    [key: string]: field_context_value_field;
};

export type field_context_value_field = {
    type?: string;
    label?: string;
    placeholder?: string;
    helper?: string;
};

export type ambiance_context_value = {
    sectionHeaderCorner?: string;
    menuItemCorner?: string;
    menuFoldCorner?: string;
    buttonCorner?: string;
    thumbnailCorner?: string;
    tagCorner?: string;
    frameCorner?: string;
    modalCorner?: string;
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

export type message_level = 'success' | 'info' | 'error' | 'warning' | 'debug' | 'question';

export type icons_context_value = {
    fa?: any[];
};

export type message = {
    message: string;
    level?: message_level;
};

export type messages_context_value = {
    messages: message[];
};

export type notification = {
    message: string;
};

export type notifications_context_value = {
    notifications: notification[];
};

export type favorite = {
    target: any;
};

export type favorites_context_value = {
    favorites: favorite[];
};

export type dark_mode_mode = 'default' | 'dark' | 'light';

export type dark_mode_context_value = {
    darkMode: dark_mode_mode;
    setDarkMode: (mode: dark_mode_mode) => void;
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

export type ssr_page_context_value = {
    data: any;
    assets?: any;
    styles?: any[];
    scripts?: any[];
    assetPrefix?: string;
    assetEntrypoint: string;
    locale?: string;
    applicationContext?: any;
};


export type fullscreen_context_value = {
    active: boolean;
    enter: () => Promise<void>;
    exit: () => Promise<void>;
};

export type theme = { [key: string]: any };
export type themes = { default: theme; [key: string]: theme };

export type app_context_params = {
    localeOptions?: any;
    localeBackends?: any[];
    storageKeyFactory?: (k: string) => string;
    themes?: any;
    theme?: any;
    upload?: upload_context_value;
    queries?: any;
    callbacks?: any;
    translations?: any;
    locales?: locale[];
    defaultLocale?: string;
    fallbackLocale?: string;
    getImage?: image_getter;
    apiOptions?: any;
    fullscreen?: fullscreen_context_value;
    cleanData?: clean_data_context_value;
};

export type app_importer_function = ({ path, name }: { path: string; name: string }) => Promise<any> | undefined;
export type importers = { [key: string]: [app_importer_function, string[]] };
export type importer_function = (name: string, key: string) => LazyExoticComponent<ComponentType<any>> | undefined;
export type importer_context_params = undefined | importer_function;

export type logos_context_value = {
    logo?: image;
    logoFull?: image;
};
export type breadcrumbs_factory_context_value = (name: string, ctx: any) => any[];
export type menus_factory_context_value = (name: string, ctx: any) => any[];
export type list_factory_context_value = (name: string, ctx: any) => any;

// noinspection JSUnusedGlobalSymbols
export type workflow_step = {
    id: string;
    label: any;
    description: any;
    bgImage?: image;
    image?: image;
    isDisabled?: Function;
    component: ComponentType<{ onChange: Function; onSubmit: Function; defaultValues?: { [key: string]: any } }>;
};
export type upload_context_value = {
    requestUploadInfos: request_upload_infos;
};
export type request_upload_infos = (
    request: { defaultValues: any; name: string; type: string },
    userContext: user_context_value,
) => Promise<upload_infos>;
export type upload_infos = {
    fields: any;
    meta: {
        fileUrl: string;
    };
    url: string;
};

export type dynamic_form_context_value = {
    definition: dynamic_form;
};

export type dynamic_form = {
    [key: string]: dynamic_form_section;
};

export type dynamic_form_section = {
    content?: content[];
};

export type content = {
    type?: string;
};

export type clean_data_fn = (raw: any, keptKeys: (string | string[])[], createMode: boolean) => any;

export type clean_data_context_value = clean_data_fn;
