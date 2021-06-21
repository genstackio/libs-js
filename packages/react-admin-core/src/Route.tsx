import {Route as BaseRoute} from "react-router-dom";
import {route} from "./types";
import componentFactory from "./utils/componentFactory";

export function Route({screenImporter, user = undefined, secured = true, routes = [], path, exact = true, component = undefined, screen: screenName}: route) {
    screenName = (secured && !user) ? 'login' : screenName;
    const Component = (screenName && screenImporter) ? componentFactory(screenName, screenImporter) : component;
    return (
        <BaseRoute
            {...(path ? {path} : {})}
            {...(('boolean' === typeof exact) ? {exact} : {})}
            render={(props: any) => (
                // pass the sub-routes down to keep nesting
                <Component {...props} routes={routes} />
            )}
        />
    );
}

export default Route