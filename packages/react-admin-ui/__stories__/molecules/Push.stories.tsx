import { args, a, s } from '../utils';
import { Push } from '../../src';
import data from '../data';

export default {
    title: 'Molecules/Push',
    component: Push,
    argTypes: a({
        title: args.title,
        subtitle: args.subtitle,
        text: args.text,
        btnLabel: args.btnLabel,
        btnTarget: args.target,
        image: args.image,
        color: args.color,
        fgColor: { control: 'text' },
        imageLeft: { control: 'boolean' },
    }),
};

const Template = (args) => <Push {...args} />;

export const basic = s(Template, {
    title: data.common.title,
    subtitle: data.common.subtitle,
    text: data.common.content,
    btnLabel: data.buttons.button1.label,
    btnType: 'contained',
    btnColor: 'primary',
    btn2Label: data.buttons.button2.label,
    btn2Type: 'contained',
    btn2Color: 'secondary',
    image: data.common.image,
});

export const imageBottom = s(Template, {
    title: data.common.title,
    subtitle: data.common.subtitle,
    text: data.common.content,
    btnLabel: data.buttons.button1.label,
    btnType: 'contained',
    btnColor: 'primary',
    btn2Label: data.buttons.button2.label,
    btn2Type: 'contained',
    btn2Color: 'secondary',
    image: data.common.image,
    imagePosition: 'bottom',
});

export const withBgImage = s(Template, {
    title: data.common.title,
    subtitle: data.common.subtitle,
    text: data.common.content,
    btnLabel: data.buttons.button1.label,
    image: data.common.image,
});

export const imageLeft = s(Template, {
    title: data.common.title,
    subtitle: data.common.subtitle,
    text: data.common.content,
    btnLabel: data.buttons.button1.label,
    image: data.common.image,
    imageLeft: true,
});
