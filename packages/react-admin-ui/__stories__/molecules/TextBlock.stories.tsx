import { args, s, a } from '../utils';
import { TextBlock } from '../../src';
import data from '../data';

export default {
    title: 'Molecules/TextBlock',
    component: TextBlock,
    argTypes: a({
        icon: args.icon,
        title: args.title,
        text: args.children,
        color: args.color,
        variant: args.blockVariant,
        padding: args.padding,
    }),
};

export const basic = s(TextBlock, {
    icon: data.common.icon,
    title: data.common.title,
    text: data.common.content,
    variant: 'contained',
    color: 'primary',
});
