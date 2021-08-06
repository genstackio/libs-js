import { args, s, a } from '../utils';
import { BlockHeader } from '../../src';

export default {
    title: 'Atoms/BlockHeader',
    component: BlockHeader,
    argTypes: a({
        title: args.title,
        color: args.color,
        variant: args.blockVariant,
        padding: args.padding,
    }),
};

const Template = (args) => <BlockHeader {...args} />;

export const basic = s(Template, {
    title: 'this is the title',
});

export const withLogo = s(Template, {
    title: 'this is the title',
    icon: 'fa-fas--arrow-right',
    variant: 'contained',
});
