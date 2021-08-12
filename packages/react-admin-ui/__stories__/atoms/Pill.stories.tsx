import { args, s, a } from '../utils';
import { Pill } from '../../src';
import data from '../data';

export default {
    title: 'Atoms/Pill',
    component: Pill,
    argTypes: a({
        text: args.text,
        color: args.color,
        variant: args.blockVariant,
    }),
};

export const basic = s(Pill, {
    text: '8',
});

export const withLongText = s(Pill, {
    text: data.tag.text,
    variant: 'contained',
    color: 'primary',
});
