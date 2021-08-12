import { args, s, a } from '../utils';
import { HeadingText } from '../../src';
import data from '../data';

export default {
    title: 'Atoms/HeadingText',
    component: HeadingText,
    argTypes: a({
        color: args.color,
        title: args.title,
        subtitle: args.subtitle,
    }),
};

export const basic = s(HeadingText, {
    title: data.common.title,
    subtitle: data.common.subtitle,
});

export const section = s(HeadingText, {
    title: data.common.title,
    subtitle: data.common.subtitle,
    variant: 'section',
});

export const sectionInheritColor = s(HeadingText, {
    title: data.common.title,
    subtitle: data.common.subtitle,
    color: 'inherit',
    variant: 'section',
});
