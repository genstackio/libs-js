import { ArgumentBlock } from '../../src/molecules/ArgumentBlock';
import { args, a, s } from '../utils';
import data from '../data';

export default {
    title: 'Molecules/ArgumentBlock',
    component: ArgumentBlock,
    argTypes: a({
        title: args.title,
        color: args.color,
        variant: args.blockVariant,
        subtitle: args.subtitle,
        image: args.image,
        p: args.padding,
        m: args.margin,
        b: args.border,
        corner: args.corner,
    }),
};

export const basic = s(ArgumentBlock, {
    title: data.common.title,
    subtitle: data.common.subtitle,
    image: data.common.image,
});

export const withoutImage = s(ArgumentBlock, {
    title: data.common.title,
    subtitle: data.common.subtitle,
});

export const withButtons = s(ArgumentBlock, {
    title: data.common.title,
    subtitle: data.common.subtitle,
    btnLabel: data.buttons.button1.label,
    btnTarget: data.buttons.button1.target,
    image: data.common.image,
    btn2Label: data.buttons.button2.label,
    btn2Target: data.buttons.button2.target,
    btn2Type: 'outlined',
});
