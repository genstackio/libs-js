import {args, s} from "../utils";
import {Figure} from '../../src';

export default {
    title: 'Molecules/Figure',
    component: Figure,
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

const Template = args => <Figure {...args} />;

export const basic = s(Template, {
    title: 'Our Sale Value',
    price: '$745425',
    tag: {text: 'New', color: 'success'},
    pill: {
        text: 'coeur',
        color: 'warning'}
});