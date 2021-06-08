import "../assets/css/styles.css";
import i18nFactory from "../src/utils/i18nFactory";
import {I18nextProvider} from "react-i18next";
import {select} from "@storybook/addon-knobs";
import { StylesProvider } from '@material-ui/core/styles';
import translations from "../src/configs/translations";

export const langSelect = () => select('lang', translationNames, 'fr-FR');

const translationNames = Object.keys(translations);
translationNames.sort();

export function uiStory(Component, {}: {apiMocks: object|false} = {apiMocks: {}}) {
    return args => {
        const lang = langSelect();
        const i18n = i18nFactory({lng: lang});

        return  (
          <StylesProvider injectFirst>
            <I18nextProvider i18n={i18n}>
                <Component {...args} />
            </I18nextProvider>
          </StylesProvider>
        )
    }
}

export function s(Component, args, opts: any = {}) {
    const story = (Object.assign as any)(uiStory(Component, opts).bind({}), {args});
    story.story = story.story || {};
    story.story.parameters = story.story.parameters || {};
    story.story.parameters.themes = {
        list: [
            { name: 'orange', class: 'theme-orange', color: 'orange' },
            { name: 'blue', class: 'theme-blue', color: 'blue' },
            { name: 'green', class: 'theme-green', color: 'green' },
            { name: 'brown', class: 'theme-brown', color: 'brown' }
        ],
    };
    story.story.parameters.grid = {
        columns: 12,
    };
    return story;
}

export const args = {
    actions: { control: {type: 'object'} },
    badge: { control: {type: 'object'} },
    badges: { control: {type: 'object'} },
    badgeLabel: {control: {type: 'text'}},
    badgeVariant: { control: {type: 'select'}, options: ['pill', 'tag', 'none'] },
    bgIcon: { table: {disable: true} },
    blockVariant: { control: {type: 'select'}, options: ['filled', 'outlined', 'contained'] },
    btnLabel: {control: {type: 'text'}},
    buttonsItems: { control: {type: 'object'} },
    chart: { control: {type: 'object'} },
    chartItems: { control: {type: 'object'} },
    children: {control: {type: 'text'}},
    classes: { table: {disable: true} },
    closable: { control: {type: 'boolean'} },
    code: { control: {type: 'number'} },
    color: { control: {type: 'select'}, options: ['primary', 'secondary', 'success', 'info', 'warning', 'danger', 'light', 'dark'] },
    columns: { control: {type: 'object'} },
    content: {control: {type: 'text'}},
    dashboardItems: { control: {type: 'object'} },
    datas: { control: {type: 'object'} },
    default: { control: {type: 'text'} },
    defaultValue: { control: {type: 'number'} },
    description: {control: {type: 'text'}},
    disabled: { control: {type: 'boolean'} },
    dropdownItems: { control: {type: 'object'} },
    form: { control: {type: 'object'} },
    icon: { table: {disable: true} },
    iconCorner: { control: {type: 'select'}, options: ['settings', 'query_builder', 'notifications_none_icon', 'none'] },
    image: { control: {type: 'object'} },
    initialPrice: { control: {type: 'object'} },
    isMenu: { control: {type: 'boolean'} },
    items: { control: {type: 'object'} },
    labels: { control: {type: 'object'} },
    large: { control: {type: 'boolean'} },
    logo: { control: {type: 'object'} },
    menuItems: { control: {type: 'object'} },
    message: { control: {type: 'text'} },
    name: { control: {type: 'text'} },
    onChange: { table: {disable: true} },
    onClick: { table: {disable: true} },
    onClose: { table: {disable: true} },
    opened: { control: {type: 'boolean'} },
    overline: { control: {type: 'text'} },
    padding: { control: {type: 'radio'}, options: ['none', 'default'] },
    paginationVariant: { control: {type:'select'}, options :['text', 'outlined'] },
    pill: { control: {type: 'object'} },
    position: { control: {type:'select'}, options: ['left', 'center', 'right'] },
    price: { control: {type: 'text'} },
    progress: { control: {type: 'number'} },
    progressVariant: { control: {type: 'select'}, options: ['linear', 'circular'] },
    quantity: { control: {type: 'number'} },
    rating: { control: {type: 'number'} },
    ribbon: { control: {type: 'select'}, options: ['top-left', 'top-right', 'bottom-left', 'bottom-right'] },
    rowsPerPage: { control: {type: 'number'} },
    selection: { control: {type: 'boolean'} },
    series: { control: {type: 'object'} },
    shape: { control: {type: 'select'}, options: ['circular', 'rounded'] },
    size: { control: {type: 'select'}, options: ['xs', 'sm', 'md', 'lg', 'xl'] },
    spinnerVariant: { control: {type: 'select'}, options: ['full-circle', 'half-circle', 'separate-circle', 'dotted-circle', 'dots', 'squares'] },
    status: { control: {type: 'select'}, options: ['online', 'offline', 'busy'] },
    striped: { control: {type: 'boolean'} },
    subtitle: { control: {type: 'text'} },
    tag: { control: {type: 'object'} },
    text: { control: {type: 'text'} },
    textValue: { control: {type: 'text'} },
    textVariant: { control: {type:'select'}, options :['title1', 'title2', 'title3', 'title4', 'title5', 'title6', 'subtitle', 'underline', 'body', 'description'] },
    toRight: { control: {type: 'boolean'} },
    title: { control: {type: 'text'} },
    unit: { control: {type: 'select'}, options: [undefined, '$', '€', '£', 'M'] },
    value: { control: {type: 'number'} },
    values: { control: {type: 'object'} },
};