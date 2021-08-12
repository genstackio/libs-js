import { args, s, a } from '../../utils';
import { HeadingBlock } from '../../../src';
import data from '../../data';

export default {
    title: 'Organisms/Blocks/HeadingBlock',
    component: HeadingBlock,
    argTypes: a({
        color: args.color,
        variant: args.blockVariant,
        padding: args.padding,
        iconCornerTopLeft: args.iconCorner,
        iconCornerTopRight: args.iconCorner,
        iconCornerBottomLeft: args.iconCorner,
        iconCornerBottomRight: args.iconCorner,
    }),
};

const Template = (args) => <HeadingBlock {...args} />;

export const basic = s(Template, {
    title: data.common.title,
    text: data.common.content,
    btnLabel: data.buttons.button1.label,
    image: data.common.image,
});

export const custom = s(Template, {
    title: data.common.title,
    text: data.common.content,
    btnLabel: data.buttons.button1.label,
    iconTitle: data.common.icon,
    image: data.common.image,
});
