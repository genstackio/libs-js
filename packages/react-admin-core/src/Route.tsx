import { Route as BaseRoute } from 'react-router-dom';
import { route } from './types';
import { useCallback, useMemo } from 'react';
import { useImporter } from '@genstackio/react-contexts';

function formatScreenComponentName(n: string) {
    return `${n
        .split(/_/g)
        .map((x) => `${x.slice(0, 1).toUpperCase()}${x.slice(1)}`)
        .join('')}`;
}

export function Route({
    user = undefined,
    secured = true,
    routes = [],
    path,
    exact = true,
    component = undefined,
    screen: screenName,
}: route) {
    screenName = secured && !user ? 'login' : screenName;
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
            <Component {...props} routes={routes} />
        ),
        [routes, Component],
    );
    return <BaseRoute {...(path ? { path } : {})} {...('boolean' === typeof exact ? { exact } : {})} render={render} />;
}

export default Route;
