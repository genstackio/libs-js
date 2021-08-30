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
import { avatarSizeValues } from '../src/mappings/avatar-sizes';
import { elevationValues } from '../src/mappings/elevations';
import { paddingValues } from '../src/mappings/paddings';
import { alignmentValues } from '../src/mappings/alignments';
import { blockVariantValues } from '../src/mappings/block-variants';
import { boxVariantValues } from '../src/mappings/box-variants';
import { boxColorValues } from '../src/mappings/box-colors';
import { fieldVariantValues } from '../src/mappings/field-variants';
import { cornerValues } from '../src/mappings/corners';
import { labelPlacementValues } from '../src/mappings/label-placements';
import { progressVariantValues } from '../src/mappings/progress-variants';
import { ratingVariantValues } from '../src/mappings/rating-variants';
import { shapeValues } from '../src/mappings/shapes';
import { textSizeValues } from '../src/mappings/text-sizes';
import { spinnerColorValues, spinnerSizeValues, spinnerVariantValues } from '../src/mappings/spinners';
import { statusValues } from '../src/mappings/statuses';
import { textVariantValues } from '../src/mappings/text-variants';
import { borderValues } from '../src/mappings/borders';
import { accordionCornerValues } from '../src/mappings/accordion-corners';
import { marginValues } from '../lib/mappings/margins';

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
    accordionCorner: { control: { type: 'select' }, options: accordionCornerValues },
    accordionVariant: { control: { type: 'select' }, options: ['filled', 'outlined', 'contained', 'light'] },
    actions: { control: { type: 'object' } },
    author: { control: { type: 'text' } },
    badge: { control: { type: 'object' } },
    badges: { control: { type: 'object' } },
    badgeLabel: { control: { type: 'text' } },
    badgeVariant: { control: { type: 'select' }, options: ['pill', 'tag', 'none'] },
    bgColor: { control: { type: 'color' } },
    bgIcon: { table: { disable: true } },
    blockVariant: { control: { type: 'select' }, options: blockVariantValues },
    boxVariant: { control: { type: 'select' }, options: boxVariantValues },
    border: { control: { type: 'select' }, options: borderValues },
    btnLabel: { control: { type: 'text' } },
    buttonsItems: { control: { type: 'object' } },
    chart: { control: { type: 'object' } },
    chartItems: { control: { type: 'object' } },
    children: { control: { type: 'text' } },
    classes: { table: { disable: true } },
    code: { control: { type: 'number' } },
    color: { control: { type: 'select' }, options: boxColorValues },
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
    fieldVariant: { control: { type: 'select' }, options: fieldVariantValues },
    fieldValue: { control: { type: 'text' } },
    rows: { control: { type: 'number' } },
    form: { control: { type: 'object' } },
    icon: { table: { disable: true } },
    corner: { control: { type: 'select' }, options: cornerValues },
    labelPlacement: { control: { type: 'select' }, options: labelPlacementValues },
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
    padding: { control: { type: 'select' }, options: paddingValues },
    margin: { control: { type: 'select' }, options: marginValues },
    elevation: { control: { type: 'select' }, options: elevationValues },
    paginationVariant: { control: { type: 'select' }, options: ['text', 'outlined'] },
    pill: { control: { type: 'object' } },
    position: { control: { type: 'select' }, options: alignmentValues },
    price: { control: { type: 'text' } },
    progress: { control: { type: 'number' } },
    progressVariant: { control: { type: 'select' }, options: progressVariantValues },
    ratingVariant: { control: { type: 'select' }, options: ratingVariantValues },
    ribbon: { control: { type: 'select' }, options: ['top-left', 'top-right', 'bottom-left', 'bottom-right'] },
    rowsPerPage: { control: { type: 'number' } },
    selection: { control: { type: 'boolean' } },
    series: { control: { type: 'object' } },
    shape: { control: { type: 'select' }, options: shapeValues },
    avatarSize: { control: { type: 'select' }, options: avatarSizeValues },
    size: { control: { type: 'select' }, options: ['xs', 'sm', 'md', 'lg', 'xl'] },
    target: { control: { type: 'text' } },
    textSize: { control: { type: 'select' }, options: textSizeValues },
    spinnerVariant: { control: { type: 'select' }, options: spinnerVariantValues },
    spinnerSize: { control: { type: 'select' }, options: spinnerSizeValues },
    spinnerColor: { control: { type: 'select' }, options: spinnerColorValues },
    status: { control: { type: 'select' }, options: statusValues },
    steps: { control: { type: 'object' } },
    striped: { control: { type: 'boolean' } },
    tag: { control: { type: 'object' } },
    textValue: { control: { type: 'text' } },
    textVariant: { control: { type: 'select' }, options: textVariantValues },
    toolbar: { control: { type: 'object' } },
    toRight: { control: { type: 'boolean' } },
    unit: { control: { type: 'select' }, options: [undefined, '$', '€', '£', 'M'] },
    value: { control: { type: 'number' } },
    values: { control: { type: 'object' } },
    mocks: { table: { disable: true } },
};
