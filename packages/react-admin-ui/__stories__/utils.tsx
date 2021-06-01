import {select} from "@storybook/addon-knobs";
import i18nFactory from "../src/utils/i18nFactory";
import translations from "../src/configs/translations";
import {I18nextProvider} from "react-i18next";
import { StylesProvider } from '@material-ui/core/styles';
import "../assets/css/styles.css";

export const langSelect = () => select('lang', translationNames, 'fr-FR');

const translationNames = Object.keys(translations);
translationNames.sort();

export function uiStory(Component, {apiMocks}: {apiMocks: object|false} = {apiMocks: {}}) {
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
    btnLabel: {control: {type: 'text'}},
    badgeLabel: {control: {type: 'text'}},
    children: {control: {type: 'text'}},
    content: {control: {type: 'text'}},
    description: {control: {type: 'text'}},
    name: { control: {type: 'text'} },
    price: { control: {type: 'text'} },
    subtitle: { control: {type: 'text'} },
    text: { control: {type: 'text'} },
    textValue: { control: {type: 'text'} },
    title: { control: {type: 'text'} },
    defaultValue: { control: {type: 'number'} },
    progress: { control: {type: 'number'} },
    quantity: { control: {type: 'number'} },
    rowsPerPage: { control: {type: 'number'} },
    value: { control: {type: 'number'} },
    closable: { control: {type: 'boolean'} },
    disabled: { control: {type: 'boolean'} },
    isMenu: { control: {type: 'boolean'} },
    toRight: { control: {type: 'boolean'} },
    large: { control: {type: 'boolean'} },
    opened: { control: {type: 'boolean'} },
    selection: { control: {type: 'boolean'} },
    badge: { control: {type: 'object'} },
    buttonsItems: { control: {type: 'object'} },
    chartItems: { control: {type: 'object'} },
    chart: { control: {type: 'object'} },
    columns: { control: {type: 'object'} },
    dashboardItems: { control: {type: 'object'} },
    datas: { control: {type: 'object'} },
    dropdownItems: { control: {type: 'object'} },
    image: { control: {type: 'object'} },
    items: { control: {type: 'object'} },
    labels: { control: {type: 'object'} },
    menuItems: { control: {type: 'object'} },
    pill: { control: {type: 'object'} },
    series: { control: {type: 'object'} },
    tag: { control: {type: 'object'} },
    values: { control: {type: 'object'} },
    padding: { control: {type: 'radio'}, options: ['none', 'default'] },
    color: { control: {type: 'select'}, options: ['primary', 'secondary', 'success', 'info', 'warning', 'danger', 'light', 'dark'] },
    position: { control: {type:'select'}, options: ['left', 'center', 'right'] },
    shape: { control: {type: 'select'}, options: ['circular', 'rounded'] },
    size: { control: {type: 'select'}, options: ['xs', 'sm', 'md', 'lg', 'xl'] },
    status: { control: {type: 'select'}, options: ['online', 'offline', 'busy'] },
    unit: { control: {type: 'select'}, options: [undefined, '$', '€', '£', 'M'] },
    badgeVariant: { control: {type: 'select'}, options: ['pill', 'tag', 'none'] },
    blockVariant: { control: {type: 'select'}, options: ['filled', 'outlined', 'contained'] },
    progressVariant: { control: {type: 'select'}, options: ['linear', 'circular'] },
    spinnerVariant: { control: {type: 'select'}, options: ['full-circle', 'half-circle', 'separate-circle', 'dotted-circle', 'dots', 'squares'] },
    textVariant: { control: {type:'select'}, options :['title1', 'title2', 'title3', 'title4', 'title5', 'title6', 'subtitle', 'underline', 'body', 'description'] },
    paginationVariant: { control: {type:'select'}, options :['text', 'outlined'] },
    classes: { table: {disable: true} },
    icon: { table: {disable: true} },
    bgIcon: { table: {disable: true} },
    onChange: { table: {disable: true} },
    onClick: { table: {disable: true} },
    onClose: { table: {disable: true} },
    default: { control: {type: 'text'} },
    iconCorner: { control: {type: 'select'}, options: ['settings', 'query_builder', 'notifications_none_icon', 'none'] },
    ribbon: { control: {type: 'select'}, options: ['top-left', 'top-right', 'bottom-left', 'bottom-right'] },
};