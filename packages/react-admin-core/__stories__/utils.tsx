import "../assets/css/styles.css";
import {i18nFactory} from "@genstackio/react-contexts";
import {I18nextProvider} from "react-i18next";
import {StylesProvider} from '@material-ui/core/styles';
import {LocalesProvider} from "@genstackio/react-contexts/lib/contexts/LocalesContext";
import translations from "../src/configs/translations";
import {argtypes, st} from '@genstackio/react-storybook';

const translationNames = Object.keys(translations);
translationNames.sort();
const locales = {locales: translationNames.map(t => ({id: t, label: t})), default: translationNames[0], fallback: translationNames[0]};

function Provider(args) {
    const lang = args['locale'];
    const i18n = i18nFactory({lng: lang});

    return  (
        <LocalesProvider value={locales}>
            <StylesProvider injectFirst>
                <I18nextProvider i18n={i18n}>
                    {args.children}
                </I18nextProvider>
            </StylesProvider>
        </LocalesProvider>
    )
}

export function a(x: any = {}) {
    return {
        locale: args.locale,
        ...x,
    };
}

export function s(Component, args, opts: any = {}) {
    return st(Component, args, {...opts, provider: Provider, providerProps: {locale: true}});
}

export const args = {
    ...argtypes,
    locale: {control: {type: 'select'}, options: translationNames},
};
