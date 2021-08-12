import { args, s, a } from '../utils';
import { BoxHeader } from '../../src';
import data from '../data';

export default {
    title: 'Molecules/BoxHeader',
    component: BoxHeader,
    argTypes: a({
        title: args.title,
        color: args.color,
        variant: args.blockVariant,
        onAddClick: args.target,
    }),
};

export const basic = s(BoxHeader, {
    title: data.common.title,
    color: 'secondary',
    variant: 'contained',
});
