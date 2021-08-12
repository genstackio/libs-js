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

const Template = (args) => <BoxHeader {...args} />;

export const basic = s(Template, {
    title: data.common.title,
    color: 'secondary',
    variant: 'contained',
});
