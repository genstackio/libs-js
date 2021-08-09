import { args, s, a } from '../utils';
import { HeadingText } from '../../src';

export default {
    title: 'Atoms/HeadingText',
    component: HeadingText,
    argTypes: a({
        color: args.color,
        title: args.title,
        subtitle: args.subtitle,
    }),
};

const Template = (args) => <HeadingText {...args} />;

export const basic = s(Template, {
    title: 'Title',
    subtitle: 'Subtitle',
});

export const section = s(Template, {
    title: 'Title',
    subtitle: 'Subtitle',
    variant: 'section',
});

export const sectionInheritColor = s(Template, {
    title: 'Title',
    subtitle: 'Subtitle',
    color: 'inherit',
    variant: 'section',
});
