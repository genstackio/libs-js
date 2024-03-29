import { args, s, a } from '../utils';
import { HeadingLeft } from '../../src';
import data from '../data';

export default {
    title: 'Molecules/HeadingLeft',
    component: HeadingLeft,
    argTypes: a({
        title: args.title,
        subtitle: args.subtitle,
        description: args.description,
        btnLabel: args.btnLabel,
        color: args.color,
        variant: args.blockVariant,
        p: args.padding,
    }),
};

export const basic = s(HeadingLeft, {
    title: data.common.title,
    subtitle: data.common.subtitle,
    description: data.common.content,
});
