import { args, s, a } from '../utils';
import { Frame } from '../../src';

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
    children: 'Lorem ipsum',
});

export const withIcon = s(Template, {
    children: 'Lorem ipsum',
    variant: 'outlined',
    icon: 'settings',
});
