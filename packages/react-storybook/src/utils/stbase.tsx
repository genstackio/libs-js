import {ComponentType} from "react";

export type stbase_params = {
    provider?: ComponentType,
    providerProps?: {[key: string]: boolean},
};

export function stbase(Component, {provider: ProviderComponent, providerProps = {}}: stbase_params) {
    return function (props) {
        const foundProviderProps = Object.entries(props).reduce((acc, [k, v]) => {
            providerProps[k] && (acc[k] = v);
            return acc;
        }, {})
        let content = <Component {...props} />;
        ProviderComponent && (content = <ProviderComponent {...foundProviderProps}>{content}</ProviderComponent>);
        return content;
    };
}

export default stbase;
