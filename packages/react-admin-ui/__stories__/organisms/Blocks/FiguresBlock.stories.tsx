import {args, s} from "../../utils";
import {FiguresBlock} from '../../../src';

export default {
    title: 'Organisms/Blocks/FiguresBlock',
    component: FiguresBlock,
    argTypes: {
        title: args.title,
        price: args.price,
        tag: args.tag,
        pill: args.pill,
        color: args.color,
        variant: args.blockVariant,
        padding: args.padding,
    },
}

const Template = args => <FiguresBlock {...args} />;

export const basic = s(Template, {
    title: 'Our Sale Value',
    price: '$745425',
    tag: {text: 'New', color: 'success'},
    pill: {
        text: 'coeur',
        color: 'warning'}
});