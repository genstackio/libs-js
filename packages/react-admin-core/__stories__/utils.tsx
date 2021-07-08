import '../assets/css/styles.css';
import { createDefaultApiContextValue, i18nFactory, IconsProvider } from '@genstackio/react-contexts';
import { I18nextProvider } from 'react-i18next';
import { StylesProvider } from '@material-ui/core/styles';
import { LocalesProvider } from '@genstackio/react-contexts/lib/contexts/LocalesContext';
import translations from '../src/configs/translations';
import translationsUi from '@genstackio/react-admin-ui/lib/configs/translations';
import { argtypes, st } from '@genstackio/react-storybook';
import { useCallback, useMemo, useState } from 'react';
import { action } from '@storybook/addon-actions';
import { FullScreen, useFullScreenHandle } from 'react-full-screen';
import { FullscreenProvider } from '@genstackio/react-contexts/lib/contexts/FullscreenContext';
import { ApiProvider } from '@genstackio/react-contexts/lib/contexts/ApiContext';
import { DarkModeProvider } from '@genstackio/react-contexts/lib/contexts/DarkModeContext';
import icons from '@genstackio/react-admin-ui/__stories__/configs/icons';

const translationNames = Object.keys(translations);
translationNames.sort();
const locales = {
    locales: translationNames.map((t) => ({ id: t, label: t })),
    default: translationNames[0],
    fallback: translationNames[0],
};

function Provider(args) {
    const lang = args['locale'];
    const mocks = args['mocks'];
    const i18n = i18nFactory({ lng: lang, resources: [translationsUi, translations] });
    const apiProviderValue: any = useMemo(
        () =>
            createDefaultApiContextValue({
                config: {
                    queries: {
                        '*': () => undefined,
                    },
                    callbacks: {
                        '*': {
                            preExecute: action('preExecute'),
                        },
                    },
                },
                useMutationMocks: mocks?.useMutationMocks,
                useLazyQueryMocks: mocks?.useLazyQueryMocks,
                useQueryMocks: mocks?.useQueryMocks,
            }),
        [],
    );
    const handle = useFullScreenHandle();
    const iconsProviderValue = icons;
    const [darkMode, setDarkMode] = useState<any>('default');
    const handleSetDarkMode = useCallback(
        (value) => {
            switch (value) {
                case 'dark':
                    document.getElementById('root')?.classList.add('dark');
                    break;
                default:
                case 'default':
                    document.getElementById('root')?.classList.remove('dark');
                    break;
            }
            setDarkMode(value);
        },
        [setDarkMode],
    );
    const darkModeValue = { darkMode, setDarkMode: handleSetDarkMode };

    return (
        <FullScreen handle={handle}>
            <FullscreenProvider value={handle}>
                <ApiProvider value={apiProviderValue}>
                    <LocalesProvider value={locales}>
                        <StylesProvider injectFirst>
                            <I18nextProvider i18n={i18n}>
                                <IconsProvider value={iconsProviderValue}>
                                    <DarkModeProvider value={darkModeValue}>{args.children}</DarkModeProvider>
                                </IconsProvider>
                            </I18nextProvider>
                        </StylesProvider>
                    </LocalesProvider>
                </ApiProvider>
            </FullscreenProvider>
        </FullScreen>
    );
}

export function a(x: any = {}) {
    return {
        locale: args.locale,
        ...x,
    };
}

export function s(Component, args, opts: any = {}) {
    return st(Component, args, { ...opts, provider: Provider, providerProps: { locale: true } });
}

export const args = {
    ...argtypes,
    locale: { control: { type: 'select' }, options: translationNames },
};
