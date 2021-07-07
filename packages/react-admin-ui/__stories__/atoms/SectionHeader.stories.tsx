import { args, s, a } from '../utils';
import { SectionHeader } from '../../src';

export default {
    title: 'Atoms/SectionHeader',
    component: SectionHeader,
    argTypes: a({
        title: args.title,
        subtitle: args.subtitle,
        color: args.color,
        variant: args.boxVariant,
    }),
};

const Template = (args) => <SectionHeader {...args} />;

export const basic = s(Template, {
    title: 'This is the title',
    subtitle: 'This is the subtitle',
});

export const showcase = s(
    (args) => (
        <>
            <Template {...args} color={'primary'} />
            <Template {...args} color={'secondary'} />
            <Template {...args} color={'success'} />
            <Template {...args} color={'info'} />
            <Template {...args} color={'warning'} />
            <Template {...args} color={'danger'} />
            <Template {...args} color={'light'} />
            <Template {...args} color={'dark'} />
        </>
    ),
    {
        title: 'This is the title',
        subtitle: 'This is the subtitle',
    },
);
