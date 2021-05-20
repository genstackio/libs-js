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
        dropdownItems: args. dropdownItems,
    },
}

const Template = args => <Block {...args} />;

export const basic = s(Template, {
    title: "this is the title",
    children: "this is the content",
})