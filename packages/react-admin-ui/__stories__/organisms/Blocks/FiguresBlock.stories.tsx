import {s} from "../../utils";
import {FiguresBlock} from '../../../src';

export default {
    title: 'Organisms/Blocks/FiguresBlock',
    component: FiguresBlock,
    argTypes: {
        items: { control: {type: 'object'} },
        color: { control: {type: 'select'}, options: ['primary', 'secondary', 'success', 'info', 'warning', 'danger', 'light', 'dark'] },
        variant: { control: {type: 'select'}, options: ['filled', 'outlined', 'contained'] },
    },
}

const Template = args => <FiguresBlock {...args} />;

export const basic = s(Template, {
    title: 'Our Sale Value',
    price: '$745425',
    tag: {text: 'New', color: 'success'},
    pill: {
        text: 'coeur',
        color: 'warning'}
});