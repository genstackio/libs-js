import { args, s, a } from '../utils';
import { AlertPanel } from '../../src';
import data from '../data';

export default {
    title: 'Molecules/AlertPanel',
    component: AlertPanel,
    argTypes: a({
        color: args.color,
        variant: args.blockVariant,
        title: args.title,
        closable: args.closable,
    }),
};

export const basic = s(AlertPanel, {
    title: data.common.title,
    children: data.common.content,
});

export const withClosable = s(AlertPanel, {
    title: data.common.title,
    children: data.common.content,
    closable: true,
});
