import React from 'react';

function Provider({ children }) {
    return children;
}

export function a(x: any = {}) {
    return {
        ...x,
    };
}

export function s(Component, args) {
    return function MyComponent(args2) {
        const props = { ...args, ...args2 };

        return (
            <Provider {...props}>
                <Component {...props} />
            </Provider>
        );
    };
}
