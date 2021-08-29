import { args, s, a } from '../utils';
import { Section } from '../../src';
import data from '../data';

export default {
    title: 'Atoms/Section',
    component: Section,
    argTypes: a({
        title: args.title,
        children: args.children,
    }),
};

export const basic = s(Section, {
    children: data.common.content,
    title: data.common.title,
});

export const withoutTitle = s(Section, {
    children: data.common.content,
});
