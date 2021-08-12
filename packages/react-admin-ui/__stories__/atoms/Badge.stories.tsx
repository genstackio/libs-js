import { args, s, a } from '../utils';
import { Badge } from '../../src';
import data from '../data';

export default {
    title: 'Atoms/Badge',
    component: Badge,
    argTypes: a({
        color: args.color,
    }),
};

const Template = (args) => <Badge {...args} />;

export const basic = s(Template, {
    text: data.tag.text,
});

export const custom = s(Template, {
    color: 'success',
    text: data.tag.text,
    variant: 'contained',
    type: 'pill',
});
