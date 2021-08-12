import { args, s, a } from '../utils';
import { Frame } from '../../src';
import data from '../data';

export default {
    title: 'Atoms/Frame',
    component: Frame,
    argTypes: a({
        icon: args.iconCorner,
        size: args.textSize,
        children: args.text,
    }),
};

const Template = (args) => <Frame {...args} />;

export const basic = s(Template, {
    children: data.common.content,
});

export const withIcon = s(Template, {
    children: data.common.content,
    variant: 'outlined',
    icon: data.common.icon,
});
