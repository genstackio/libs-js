import { Route as BaseRoute } from 'react-router-dom';
import { route } from './types';
import componentFactory from './utils/componentFactory';
import { useCallback, useMemo } from 'react';

export function Route({
    screenImporter,
    user = undefined,
    secured = true,
    routes = [],
    path,
    exact = true,
    component = undefined,
    screen: screenName,
}: route) {
    screenName = secured && !user ? 'login' : screenName;
    const Component = useMemo(
        () => (screenName && screenImporter ? componentFactory(screenName, screenImporter) : component),
        [screenName, screenImporter, component],
    );
    const render = useCallback(
        (props: any) => (
            // pass the sub-routes down to keep nesting
            <Component {...props} routes={routes} />
        ),
        [routes, Component],
    );
    return <BaseRoute {...(path ? { path } : {})} {...('boolean' === typeof exact ? { exact } : {})} render={render} />;
}

export default Route;
