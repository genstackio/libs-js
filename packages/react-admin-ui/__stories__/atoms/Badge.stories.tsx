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

export const basic = s(Badge, {
    text: data.tag.text,
});

export const custom = s(Badge, {
    color: 'success',
    text: data.tag.text,
    variant: 'contained',
    type: 'pill',
});
