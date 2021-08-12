import { args, s, a } from '../utils';
import { Column } from '../../src';
import data from '../data';

export default {
    title: 'Atoms/Column',
    component: Column,
    argTypes: a({
        children: args.text,
        center: args.selection,
    }),
};
const Template = (args) => <Column {...args} />;

export const basic = s(Template, {
    children: data.common.content,
});

export const centered = s(Template, {
    children: data.common.content,
    center: true,
});
