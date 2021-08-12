import { args, s, a } from '../utils';
import { SectionHeader } from '../../src';
import data from '../data';

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

export const basic = s(SectionHeader, {
    title: data.common.title,
    subtitle: data.common.subtitle,
});

export const showcase = s(
    (args) => (
        <>
            <SectionHeader {...args} color={'primary'} />
            <SectionHeader {...args} color={'secondary'} />
            <SectionHeader {...args} color={'success'} />
            <SectionHeader {...args} color={'info'} />
            <SectionHeader {...args} color={'warning'} />
            <SectionHeader {...args} color={'danger'} />
            <SectionHeader {...args} color={'light'} />
            <SectionHeader {...args} color={'dark'} />
        </>
    ),
    {
        title: data.common.title,
        subtitle: data.common.subtitle,
    },
);
