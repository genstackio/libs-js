import { args, s, a } from '../utils';
import { BrandPanel } from '../../src';
import data from '../data';

export default {
    title: 'Molecules/BrandPanel',
    component: BrandPanel,
    argTypes: a({
        color: args.color,
        variant: args.boxVariant,
        image: args.image,
        title: args.title,
        description: args.description,
    }),
};

export const basic = s(BrandPanel, {
    title: data.common.title,
    description: data.common.content,
    btnLabel: data.buttons.button1.label,
    btnType: 'filled',
    image: data.item.image,
    color: 'primary',
    variant: 'contained',
});

export const multipleButtons = s(BrandPanel, {
    title: data.common.title,
    description: data.common.content,
    btnLabel: data.buttons.button1.label,
    btn2Label: data.buttons.button2.label,
    btn3Label: data.buttons.button3.label,
    image: data.item.image,
    color: 'primary',
    variant: 'contained',
});
