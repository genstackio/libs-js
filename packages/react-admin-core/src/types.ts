export type route = {
    user?: any;
    path?: string;
    secured?: boolean;
    screen?: string;
    screenProps?: any;
    exact?: boolean;
    routes?: route[];
    component?: any;
    requiredRoles?: string[];
    loadingComponent?: any;
    redirect?: string;
};

export type user_context_value = { user: undefined | { id: string; email: string }; setUser: Function };

export type menu_ctx = {
    t: Function;
    user: any;
    history: any;
};

export type breadcrumbs_ctx = {
    t: Function;
    user: any;
    history: any;
    id?: string;
};

export type list_ctx = {
    t: Function;
    user: any;
    history: any;
};

export type uploader_builder_options = {
    configure?: Function;
    loadIdentity?: Function;
    init?: Function;
    clean?: Function;
    fetch?: Function;
};
