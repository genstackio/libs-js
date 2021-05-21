import {args, s} from "../utils";
import {Block} from '../../src';

export default {
    title: 'Atoms/Block',
    component: Block,
    argTypes: {
        title: args.title,
        children: args.children,
        color: args.color,
        variant: args.blockVariant,
        padding: args.padding,
        bntLabel: args.btnLabel,
        dropdownItems: args.dropdownItems,
    },
}

const Template = args => <Block {...args} />;

export const basic = s(Template, {
    title: "this is the title",
    children: "this is the content",
    firstIcon: 'Adb',
})

export const withBackgroundImage = s(Template, {
    title: "this is the title",
    children: "this is the content",
    firstIcon: 'Adb',
    image: {
        url: 'https://images.unsplash.com/photo-1578836537282-3171d77f8632?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
        alt: '',
    },
})