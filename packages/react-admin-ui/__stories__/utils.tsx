import "../assets/css/styles.css";
import {i18nFactory} from "@genstackio/react-contexts";
import {I18nextProvider} from "react-i18next";
import {StylesProvider} from '@material-ui/core/styles';
import {LocalesProvider} from "@genstackio/react-contexts/lib/contexts/LocalesContext";
import translations from "../src/configs/translations";
import {boxVariants} from "../src/mappings/box-variants";
import {boxColors} from "../src/mappings/box-colors";
import {corners} from "../src/mappings/corners";
import {paddings} from "../src/mappings/paddings";
import {alignments} from "../src/mappings/alignments";
import {progressVariants} from "../src/mappings/progress-variants";
import {shapes} from "../src/mappings/shapes";
import {spinnerVariants} from "../src/mappings/spinner-variants";
import {statuses} from "../src/mappings/statuses";
import {textVariants} from "../src/mappings/text-variants";
import {argtypes, st} from '@genstackio/react-storybook';

const translationNames = Object.keys(translations);
translationNames.sort();
const locales = {locales: translationNames.map(t => ({id: t, label: t})), default: translationNames[0], fallback: translationNames[0]};

function Provider(args) {
  const lang = args['locale'];
  const i18n = i18nFactory({lng: lang, resources: translations});

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
    accordionVariant: { control: {type: 'select'}, options: ['filled', 'outlined', 'contained', 'light'] },
    actions: { control: {type: 'object'} },
    author:{ control: {type: 'text'}},
    badge: { control: {type: 'object'} },
    badges: { control: {type: 'object'} },
    badgeLabel: {control: {type: 'text'}},
    badgeVariant: { control: {type: 'select'}, options: ['pill', 'tag', 'none'] },
    bgColor: { control: {type: 'color'} },
    bgIcon: { table: {disable: true} },
    blockVariant: { control: {type: 'select'}, options: Object.keys(boxVariants) },
    btnLabel: {control: {type: 'text'}},
    buttonsItems: { control: {type: 'object'} },
    chart: { control: {type: 'object'} },
    chartItems: { control: {type: 'object'} },
    children: {control: {type: 'text'}},
    classes: { table: {disable: true} },
    code: { control: {type: 'number'} },
    color: { control: {type: 'select'}, options: Object.keys(boxColors) },
    columns: { control: {type: 'object'} },
    comments : { control: {type: 'number'} },
    content: { control: {type: 'text'} },
    dashboardItems: { control: {type: 'object'} },
    datas: { control: {type: 'object'} },
    date: { control: {type: 'number'} },
    default: { control: {type: 'text'} },
    defaultValue: { control: {type: 'number'} },
    dropdownItems: { control: {type: 'object'} },
    error: { control: {type: 'boolean'} },
    errorText: { control: {type: 'text'} },
    fieldType: { control: {type: 'select'}, options: ['text', 'email', 'password'] },
    fieldValue: { control: {type: 'text'}},
    rows: { control: {type: 'number'}},
    form: { control: {type: 'object'} },
    icon: { table: {disable: true} },
    corner: { control: {type: 'select'}, options: Object.keys(corners) },
    iconCorner: { control: {type: 'select'}, options: ['settings', 'query_builder', 'notifications_none_icon', 'none'] },
    initialPrice: { control: {type: 'object'} },
    isMenu: { control: {type: 'boolean'} },
    items: { control: {type: 'object'} },
    labels: { control: {type: 'object'} },
    large: { control: {type: 'boolean'} },
    likes : {control:{type: 'number'}},
    locales: { control: {type: 'object'} },
    locale: {control: {type: 'select'}, options: translationNames},
    menuItems: { control: {type: 'object'} },
    menu: { control: {type: 'object'} },
    padding: { control: {type: 'radio'}, options: Object.keys(paddings) },
    paginationVariant: { control: {type:'select'}, options :['text', 'outlined'] },
    pill: { control: {type: 'object'} },
    position: { control: {type:'select'}, options: Object.keys(alignments) },
    price: { control: {type: 'text'} },
    progress: { control: {type: 'number'} },
    progressVariant: { control: {type: 'select'}, options: Object.keys(progressVariants) },
    ribbon: { control: {type: 'select'}, options: ['top-left', 'top-right', 'bottom-left', 'bottom-right'] },
    rowsPerPage: { control: {type: 'number'} },
    selection: { control: {type: 'boolean'} },
    series: { control: {type: 'object'} },
    shape: { control: {type: 'select'}, options: Object.keys(shapes) },
    size: { control: {type: 'select'}, options: ['xs', 'sm', 'md', 'lg', 'xl'] },
    spinnerVariant: { control: {type: 'select'}, options: Object.keys(spinnerVariants) },
    status: { control: {type: 'select'}, options: Object.keys(statuses) },
    striped: { control: {type: 'boolean'} },
    tag: { control: {type: 'object'} },
    textValue: { control: {type: 'text'} },
    textVariant: { control: {type:'select'}, options: Object.keys(textVariants) },
    toolbar: { control: {type: 'object'} },
    toRight: { control: {type: 'boolean'} },
    unit: { control: {type: 'select'}, options: [undefined, '$', '€', '£', 'M'] },
    value: { control: {type: 'number'} },
    values: { control: {type: 'object'} },
};
