import {args, s} from "../../utils";
import {FigureBlock} from '../../../src';

export default {
    title: 'Organisms/Blocks/FigureBlock',
    component: FigureBlock,
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

const Template = args => <FigureBlock {...args} />;

export const basic = s(Template, {
    title: 'Our Sale Value',
    price: '$745425',
    tag: {text: 'New', color: 'success'},
    pill: {
        text: 'coeur',
        color: 'warning'}
});