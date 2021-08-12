import { ArgumentBlock } from '../../src/molecules/ArgumentBlock';
import { args, a, s } from '../utils';
import data from '../data';

export default {
    title: 'Molecules/ArgumentBlock',
    component: ArgumentBlock,
    argTypes: a({
        title: args.title,
        subtitle: args.subtitle,
        btnLabel: args.btnLabel,
        image: args.image,
    }),
};

const Template = (args) => <ArgumentBlock {...args} />;

export const basic = s(Template, {
    title: data.common.title,
    subtitle: data.common.subtitle,
    btnLabel: data.buttons.button1.label,
    btnTarget: data.buttons.button1.target,
    image: data.common.image,
});

export const withButtons = s(Template, {
    title: data.common.title,
    subtitle: data.common.subtitle,
    btnLabel: data.buttons.button1.label,
    btnTarget: data.buttons.button1.target,
    image: data.common.image,
    btn2Label: data.buttons.button2.label,
    btn2Target: data.buttons.button2.target,
    btn2Type: 'outlined',
});
