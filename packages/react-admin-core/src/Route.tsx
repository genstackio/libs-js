import { Redirect, Route as BaseRoute, useLocation } from 'react-router-dom';
import { route } from './types';
import { useCallback } from 'react';
import Routes from './Routes';
import useComponent from '@genstackio/react-contexts/lib/hooks/useComponent';

export const isUserHavingRole = (user, role: string[] = []) =>
    !role.length ? true : !!role.find((x) => (user.permissions || []).includes(x));

const defaultRoutes = [];

export function Route({
    user = undefined,
    secured = true,
    routes = defaultRoutes,
    path,
    exact = true,
    component = undefined,
    screen: screenName,
    screenProps = undefined,
    requiredRoles = undefined,
    loadingComponent = undefined,
    redirect = undefined,
}: route) {
    if (secured) {
        if (!user) {
            screenName = 'login';
        } else if (!isUserHavingRole(user, requiredRoles)) {
            screenName = 'denied';
        }
    }
    const Component = useComponent('screen', screenName, component, !!screenName);
    const qs = useLocation().search;
    const render = useCallback(
        (props: any) => {
            if (redirect) {
                return (
                    <Redirect
                        to={
                            'object' === typeof redirect
                                ? redirect
                                : (!!qs && '?' !== qs)
                                ? { pathname: redirect, search: qs }
                                : redirect
                        }
                    />
                );
            }

            return (
                // pass the sub-routes down to keep nesting
                <Component {...props} {...(screenProps || {})} screenName={screenName}>
                    {routes && !!routes.length && (
                        <Routes loadingComponent={loadingComponent}>
                            {(routes || []).map((route, i) => (
                                <Route
                                    key={i}
                                    loadingComponent={loadingComponent}
                                    {...route}
                                    requiredRoles={route['requiredRoles'] || requiredRoles}
                                    user={user}
                                    path={`${path}${route.path || ''}`.replace(/[\/]+/g, '/')}
                                />
                            ))}
                        </Routes>
                    )}
                </Component>
            );
        },
        [routes, Component, loadingComponent, user, path, screenName],
    );
    return <BaseRoute {...(path ? { path } : {})} {...('boolean' === typeof exact ? { exact } : {})} render={render} />;
}

export default Route;
