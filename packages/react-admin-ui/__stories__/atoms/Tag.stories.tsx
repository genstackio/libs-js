import { args, s, a } from '../utils';
import { Tag } from '../../src';
import data from '../data';

export default {
    title: 'Atoms/Tag',
    component: Tag,
    argTypes: a({
        text: args.text,
        icon: args.iconCorner,
        color: args.color,
        variant: args.blockVariant,
        size: args.textSize,
    }),
};

const Template = (args) => <Tag {...args} />;

export const basic = s(Template, {
    text: data.tag.text,
});

export const custom = s(Template, {
    text: data.tag.text,
    variant: 'outlined',
    icon: data.common.icon,
    size: 21,
});
export const noText = s(Template, {
    variant: 'outlined',
    icon: data.common.icon,
    size: 21,
});
