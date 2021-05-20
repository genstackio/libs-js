import {s} from "../../utils";
import {NewsBlock} from '../../../src';

export default {
    title: 'Organisms/Blocks/NewsBlock',
    component: NewsBlock,
    argTypes: {
        title: { control: {type: 'text'} },
        items: { control: {type: 'object'} },
        btnLabel: { control: {type: 'text'} },
        dropdownItems: { control: {type: 'object'} },
        color: { control: {type: 'select'}, options: ['primary', 'secondary', 'success', 'info', 'warning', 'danger', 'light', 'dark'] },
        variant: { control: {type: 'select'}, options: ['filled', 'outlined', 'contained'] },
    },
}

const Template = args => <NewsBlock {...args} />;

export const basic = s(Template, {
    title: 'News & Update',
    items: [
        {
            title: '36% off For pixel lights Couslations Types.',
            content: 'Lorem Ipsum is simply dummy...'
        },
        {
            title: 'We are produce new product this',
            content: 'Lorem Ipsum is simply text of the printing...'},
        {
            title: '50% off For COVID Couslations Types.',
            content: 'Lorem Ipsum is simply dummy...'
        },
    ],
    btnLabel: 'More...',
    dropdownItems: [
        {name: 'Today'},
        {name: 'Tomorrow'},
        {name: 'Yesterday'},
    ]
});