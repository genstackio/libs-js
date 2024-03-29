import { args, s, a } from '../utils';
import { List } from '../../src';

export default {
    title: 'Molecules/List',
    component: List,
    argTypes: a({
        color: args.color,
        items: args.items,
        badge: args.badge,
    }),
};

export const basic = s(List, {
    items: [
        {
            text: 'Item1',
        },
        {
            text: 'Item2',
            color: 'warning',
            badge: { label: '32', color: 'danger', variant: 'tag' },
        },
        {
            text: 'Item3',
        },
    ],
    badge: { label: '19', color: 'dark', variant: 'pill' },
});
