import { ItemCarrousselSlide } from '../../src/molecules/ItemCarrousselSlide';
import { args, a, s } from '../utils';
import data from '../data';

export default {
    title: 'Molecules/ItemCarrousselSlide',
    component: ItemCarrousselSlide,
    argTypes: a({
        title: args.title,
        label: args.label,
        image: args.image,
    }),
};

const Template = (args) => <ItemCarrousselSlide {...args} />;

export const basic = s(Template, {
    title: data.common.title,
    label: data.common.subtitle,
    image: data.common.image,
});

export const withButton = s(Template, {
    title: data.common.title,
    label: data.common.subtitle,
    image: data.common.image,
    btnLabel: data.buttons.button1.label,
    btnTarget: data.buttons.button1.target,
});

export const withoutImage = s(Template, {
    title: data.common.title,
    label: data.common.subtitle,
});
