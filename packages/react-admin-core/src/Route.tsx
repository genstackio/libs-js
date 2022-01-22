import { Route as BaseRoute } from 'react-router-dom';
import { route } from './types';
import { useCallback, useMemo } from 'react';
import { useImporter } from '@genstackio/react-contexts';
import Routes from "./Routes";

function formatScreenComponentName(n: string) {
    return `${n
        .split(/_/g)
        .map((x) => `${x.slice(0, 1).toUpperCase()}${x.slice(1)}`)
        .join('')}`;
}

export const isUserHavingRole = (user, role: string[] = []) =>
    !role.length ? true : (!!role.find(x => (user.permissions || []).includes(x)))
;

const defaultRoutes = [];

export function Route({
    user = undefined,
    secured = true,
    routes = defaultRoutes,
    path,
    exact = true,
    component = undefined,
    screen: screenName,
    requiredRoles = undefined,
    loadingComponent = undefined,
}: route) {
    if (secured) {
        if (!user) {
            screenName = 'login';
        } else if (!isUserHavingRole(user, requiredRoles)) {
            screenName = 'denied';
        }
    }
    const importer = useImporter();
    const Component = useMemo(
        () =>
            component ||
            (screenName && importer ? importer('screen', formatScreenComponentName(screenName)) : () => null),
        [screenName, importer, component],
    );
    const render = useCallback(
        (props: any) => (
            // pass the sub-routes down to keep nesting
            <Component {...props}>
                {routes && !!routes.length && (
                    <Routes loadingComponent={loadingComponent}>
                        {(routes || []).map((route, i) => (
                            <Route key={i} loadingComponent={loadingComponent} {...route} requiredRoles={route['requiredRoles'] || requiredRoles} user={user} path={`${path}${route.path || ''}`} />
                        ))}
                    </Routes>
                )}
            </Component>
        ),
        [routes, Component, loadingComponent, user, path],
    );
    return <BaseRoute {...(path ? { path } : {})} {...('boolean' === typeof exact ? { exact } : {})} render={render} />;
}

export default Route;
