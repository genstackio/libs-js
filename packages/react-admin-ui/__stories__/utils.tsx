import '../assets/css/styles.css';
import { createDefaultApiContextValue, i18nFactory } from '@genstackio/react-contexts';
import { I18nextProvider } from 'react-i18next';
import { StylesProvider } from '@material-ui/core/styles';
import { LocalesProvider } from '@genstackio/react-contexts/lib/contexts/LocalesContext';
import { ApiProvider } from '@genstackio/react-contexts/lib/contexts/ApiContext';
import translations from '../src/configs/translations';
import { argtypes, st } from '@genstackio/react-storybook';
import { useCallback, useMemo, useState } from 'react';
import { action } from '@storybook/addon-actions';
import * as mocks from './mocks';
import { FullScreen, useFullScreenHandle } from 'react-full-screen';
import { FullscreenProvider } from '@genstackio/react-contexts/lib/contexts/FullscreenContext';
import themes from './configs/themes';
import { IconsProvider } from '@genstackio/react-contexts/lib/IconsProvider';
import icons from './configs/icons';
import { DarkModeProvider } from '@genstackio/react-contexts/lib/contexts/DarkModeContext';
import preset from '@genstackio/react-admin-ui/lib/preset';

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
    const i18n = i18nFactory({ lng: lang, resources: translations });
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

function createMock(type: string | Function) {
    const m = 'function' === typeof type ? type : mocks[type];
    return async (data) => {
        const { result = undefined, duration = 1000, error = undefined } = await m(data);
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (error) reject(error);
                else resolve(result);
            }, duration);
        }).then((x) => x);
    };
}
export function s(Component, args, opts: any = {}) {
    return st(
        Component,
        {
            ...args,
            mocks: args.mocks || {
                useMutationMocks: [createMock('generic')],
            },
        },
        {
            ...opts,
            provider: Provider,
            providerProps: {
                locale: true,
                mocks: true,
            },
            themes,
        },
    );
}

export const args = {
    ...argtypes,
    accordionCorner: { control: { type: 'select' }, options: preset.values('accordionCorner') },
    accordionVariant: { control: { type: 'select' }, options: ['filled', 'outlined', 'contained', 'light'] },
    actions: { control: { type: 'object' } },
    author: { control: { type: 'text' } },
    badge: { control: { type: 'object' } },
    badges: { control: { type: 'object' } },
    badgeLabel: { control: { type: 'text' } },
    badgeVariant: { control: { type: 'select' }, options: ['pill', 'tag', 'none'] },
    bgColor: { control: { type: 'color' } },
    bgIcon: { table: { disable: true } },
    blockVariant: { control: { type: 'select' }, options: preset.values('blockVariant') },
    boxVariant: { control: { type: 'select' }, options: preset.values('boxVariant') },
    border: { control: { type: 'select' }, options: preset.values('border') },
    btnLabel: { control: { type: 'text' } },
    buttonsItems: { control: { type: 'object' } },
    chart: { control: { type: 'object' } },
    chartItems: { control: { type: 'object' } },
    children: { control: { type: 'text' } },
    classes: { control: { type: 'object' } },
    code: { control: { type: 'number' } },
    color: { control: { type: 'select' }, options: preset.values('boxColor') },
    columns: { control: { type: 'object' } },
    comments: { control: { type: 'number' } },
    content: { control: { type: 'text' } },
    dashboardItems: { control: { type: 'object' } },
    datas: { control: { type: 'object' } },
    date: { control: { type: 'number' } },
    default: { control: { type: 'text' } },
    definition: { control: { type: 'object' } },
    defaultValue: { control: { type: 'any' } },
    dropdownItems: { control: { type: 'object' } },
    error: { control: { type: 'boolean' } },
    errorText: { control: { type: 'text' } },
    fieldType: { control: { type: 'select' }, options: ['text', 'email', 'password'] },
    fieldVariant: { control: { type: 'select' }, options: preset.values('fieldVariant') },
    fieldValue: { control: { type: 'text' } },
    rows: { control: { type: 'number' } },
    form: { control: { type: 'object' } },
    icon: { table: { disable: true } },
    corner: { control: { type: 'select' }, options: preset.values('corner') },
    labelPlacement: { control: { type: 'select' }, options: preset.values('labelPlacement') },
    iconCorner: {
        control: { type: 'select' },
        options: ['settings', 'query_builder', 'notifications_none_icon', 'none'],
    },
    index: { control: { type: 'number' } },
    initialPrice: { control: { type: 'object' } },
    isMenu: { control: { type: 'boolean' } },
    items: { control: { type: 'object' } },
    labels: { control: { type: 'object' } },
    large: { control: { type: 'boolean' } },
    likes: { control: { type: 'number' } },
    locales: { control: { type: 'object' } },
    locale: { control: { type: 'select' }, options: translationNames },
    menuItems: { control: { type: 'object' } },
    menu: { control: { type: 'object' } },
    min: { control: { type: 'number' } },
    max: { control: { type: 'number' } },
    padding: { control: { type: 'select' }, options: preset.values('padding') },
    margin: { control: { type: 'select' }, options: preset.values('margin') },
    elevation: { control: { type: 'select' }, options: preset.values('elevation') },
    paginationVariant: { control: { type: 'select' }, options: ['text', 'outlined'] },
    pill: { control: { type: 'object' } },
    position: { control: { type: 'select' }, options: preset.values('alignment') },
    price: { control: { type: 'text' } },
    progress: { control: { type: 'number' } },
    progressVariant: { control: { type: 'select' }, options: preset.values('progressVariant') },
    ratingVariant: { control: { type: 'select' }, options: preset.values('ratingVariant') },
    ribbon: { control: { type: 'select' }, options: ['top-left', 'top-right', 'bottom-left', 'bottom-right'] },
    rowsPerPage: { control: { type: 'number' } },
    selection: { control: { type: 'boolean' } },
    series: { control: { type: 'object' } },
    shape: { control: { type: 'select' }, options: preset.values('shape') },
    avatarSize: { control: { type: 'select' }, options: preset.values('avatarSize') },
    size: { control: { type: 'select' }, options: ['xs', 'sm', 'md', 'lg', 'xl'] },
    target: { control: { type: 'text' } },
    textSize: { control: { type: 'select' }, options: preset.values('textSize') },
    spinnerVariant: { control: { type: 'select' }, options: preset.values('spinnerVariant') },
    spinnerSize: { control: { type: 'select' }, options: preset.values('spinnerSize') },
    spinnerColor: { control: { type: 'select' }, options: preset.values('spinnerColor') },
    status: { control: { type: 'select' }, options: preset.values('status') },
    steps: { control: { type: 'object' } },
    striped: { control: { type: 'boolean' } },
    tag: { control: { type: 'object' } },
    textValue: { control: { type: 'text' } },
    textVariant: { control: { type: 'select' }, options: preset.get('textVariant').styles },
    toolbar: { control: { type: 'object' } },
    toRight: { control: { type: 'boolean' } },
    unit: { control: { type: 'select' }, options: [undefined, '$', '€', '£', 'M'] },
    value: { control: { type: 'number' } },
    values: { control: { type: 'object' } },
    mocks: { table: { disable: true } },
};
