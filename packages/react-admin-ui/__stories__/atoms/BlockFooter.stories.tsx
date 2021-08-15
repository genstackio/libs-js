import { args, s, a } from '../utils';
import { BlockFooter } from '../../src';
import data from '../data';

export default {
    title: 'Atoms/BlockFooter',
    component: BlockFooter,
    argTypes: a({
        children: args.children,
        color: args.color,
        variant: args.blockVariant,
        p: args.padding,
    }),
};

export const basic = s(BlockFooter, {
    children: data.common.content,
});

export const withButtons = s(BlockFooter, {
    children: data.common.content,
    btnLabel: data.buttons.button1.label,
    btn2Label: data.buttons.button2.label,
});
