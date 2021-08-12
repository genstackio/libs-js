import { args, s, a } from '../utils';
import { CornerItem } from '../../src';

export default {
    title: 'Molecules/CornerItem',
    component: CornerItem,
    argTypes: a({
        color: args.color,
        variant: args.blockVariant,
        text: args.text,
        iconCorner: args.iconCorner,
    }),
};

const Template = (args) => <CornerItem {...args} />;

export const basic = s(Template, {
    text: 'Corner Tag',
    variant: 'contained',
    iconCorner: 'settings',
    color: 'primary',
});
