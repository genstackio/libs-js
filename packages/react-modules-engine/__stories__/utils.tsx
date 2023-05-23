import React from 'react';
import I18nProvider from '@genstackio/react-i18n/lib/I18nProvider';
import useI18nFromLocale from '@genstackio/react-i18n/lib/hooks/use18nFromLocale';
import createI18nFactory from '@genstackio/react-i18n/lib/utils/createI18nFactory';
import args from './args';

function Provider({ locale = 'fr_FR', children }) {
    const i18n = useI18nFromLocale(
        locale,
        createI18nFactory({}, (l: string) => require(`../translations/${l!.replace('-', '_')}.json`)),
    );

    return <I18nProvider value={i18n}>{children}</I18nProvider>;
}

export function a(x: any = {}) {
    return {
        locale: args.locale,
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
