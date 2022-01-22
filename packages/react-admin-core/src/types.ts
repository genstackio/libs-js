export type route = {
    user?: any;
    path?: string;
    secured?: boolean;
    screen?: string;
    exact?: boolean;
    routes?: route[];
    component?: any;
    requiredRoles?: string[];
    loadingComponent?: any;
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
