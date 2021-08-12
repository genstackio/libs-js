import { args, s, a } from '../utils';
import { Figure } from '../../src';

export default {
    title: 'Molecules/Figure',
    component: Figure,
    argTypes: a({
        title: args.title,
        price: args.price,
        tag: args.tag,
        pill: args.pill,
        color: args.color,
        variant: args.blockVariant,
        padding: args.padding,
    }),
};

export const basic = s(Figure, {
    title: 'Our Sale Value',
    price: '$745425',
});

export const withTag = s(Figure, {
    title: 'Our Sale Value',
    price: '$745425',
    tag: { text: 'New', color: 'success' },
});

export const withPill = s(Figure, {
    title: 'Our Sale Value',
    price: '$745425',
    pill: {
        text: 'coeur',
        color: 'warning',
    },
});

export const withTagAndPill = s(Figure, {
    title: 'Our Sale Value',
    price: '$745425',
    tag: { text: 'New', color: 'success' },
    pill: {
        text: 'coeur',
        color: 'warning',
    },
});
