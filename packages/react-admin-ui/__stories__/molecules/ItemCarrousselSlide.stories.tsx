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

export const basic = s(ItemCarrousselSlide, {
    title: data.common.title,
    label: data.common.subtitle,
    image: data.common.image,
});

export const withButton = s(ItemCarrousselSlide, {
    title: data.common.title,
    label: data.common.subtitle,
    image: data.common.image,
    btnLabel: data.buttons.button1.label,
    btnTarget: data.buttons.button1.target,
});

export const withoutImage = s(ItemCarrousselSlide, {
    title: data.common.title,
    label: data.common.subtitle,
});
