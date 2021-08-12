import { args, s, a } from '../utils';
import { Accordion } from '../../src';
import data from '../data';

export default {
    title: 'Molecules/Accordion',
    component: Accordion,
    argTypes: a({
        items: args.items,
        color: args.color,
        variant: args.accordionVariant,
    }),
};

export const basic = s(Accordion, {
    items: [
        {
            title: data.common.title,
            content: data.common.content,
        },
        {
            title: data.common.title,
            content: data.common.content,
            icon: data.common.icon,
        },
    ],
    expandIcon: 'navigate_next',
});
