import { args, s, a } from '../utils';
import { BlockHeader } from '../../src';
import data from '../data';

export default {
    title: 'Atoms/BlockHeader',
    component: BlockHeader,
    argTypes: a({
        title: args.title,
        color: args.color,
        variant: args.blockVariant,
        p: args.padding,
    }),
};

export const basic = s(BlockHeader, {
    title: data.common.title,
});

export const withButtons = s(BlockHeader, {
    title: data.common.title,
    btnLabel: data.buttons.button1.label,
    btn2Label: data.buttons.button2.label,
});

export const withLogo = s(BlockHeader, {
    title: data.common.title,
    icon: 'fa-fas--arrow-right',
    variant: 'contained',
});
