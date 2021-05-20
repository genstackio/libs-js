import {s} from "../../utils";
import {HeadingLeftBlock} from '../../../src';

export default {
    title: 'Organisms/Blocks/HeadingLeftBlock',
    component: HeadingLeftBlock,
    argTypes: {
        title: { control: {type: 'text'} },
        subtitle: { control: {type: 'text'} },
        description: { control: {type: 'text'} },
        btnLabel: { control: {type: 'text'} },
        color: { control: {type: 'select'}, options: ['primary', 'secondary', 'success', 'info', 'warning', 'danger', 'light', 'dark'] },
        variant: { control: {type: 'select'}, options: ['filled', 'outlined', 'contained'] },
    },
}

const Template = args => <HeadingLeftBlock {...args} />;

export const basic = s(Template, {
    title: 'Alert',
    subtitle: '10% off For drama lights Couslations...',
    description: 'Lorem Ipsum is simply dummy...It is a long established fact that a reader will be distracted by',
    btnLabel: '...',
});