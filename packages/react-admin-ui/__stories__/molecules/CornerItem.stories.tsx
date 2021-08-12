import { args, s, a } from '../utils';
import { CornerItem } from '../../src';
import data from '../data';

export default {
    title: 'Molecules/CornerItem',
    component: CornerItem,
    argTypes: a({
        color: args.color,
        variant: args.blockVariant,
        text: args.text,
        iconCorner: args.iconCorner,
    }),
};

export const basic = s(CornerItem, {
    text: data.tag.text,
    variant: 'contained',
    iconCorner: data.common.icon,
    color: 'primary',
});
