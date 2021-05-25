import {args, s} from '../utils';
import {Tag} from '../../src';

export default {
    title: 'Atoms/Tag',
    component: Tag,
    argTypes: {
        text: args.text,
        icon: args.iconCorner,
        color: args.color,
        variant: args.blockVariant,
    },
}

const Template = args => (<Tag {...args} />);

export const basic = s(Template, {
    text: "je suis un tag",
})

export const custom = s(Template, {
    text: "je suis un tag",
    variant: 'outlined',
    icon: 'settings',
    size: 21,
})
export const noText = s(Template, {
    variant: 'outlined',
    icon: 'settings',
    size: 21,
})