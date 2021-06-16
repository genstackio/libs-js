export type route = {
    screenImporter?: (name: string) => any,
    user?: any,
    path?: string,
    secured?: boolean,
    screen?: string,
    exact?: boolean,
    routes?: route[],
    component?: any,
};

export type user_context_value = {user: undefined | {id: string, email: string}, setUser: Function};

