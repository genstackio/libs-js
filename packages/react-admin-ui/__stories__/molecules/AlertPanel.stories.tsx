import { args, s, a } from '../utils';
import { AlertPanel } from '../../src';
import data from '../data';

export default {
    title: 'Molecules/AlertPanel',
    component: AlertPanel,
    argTypes: a({
        color: args.color,
        variant: args.blockVariant,
        title: args.title,
        closable: args.closable,
    }),
};

const Template = (args) => <AlertPanel {...args} />;

export const basic = s(Template, {
    title: data.common.title,
    children: data.common.content,
});

export const withClosable = s(Template, {
    title: data.common.title,
    children: data.common.content,
    closable: true,
});
