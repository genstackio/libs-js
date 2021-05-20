import {args, s} from "../utils";
import {List} from '../../src';

export default {
    title: 'Molecules/List',
    component: List,
    argTypes: {
        color: args.color,
        items: args.items,
        badge: args.badge,
    },

}

const Template = args => <List {...args} />;

export const basic = s(Template, {
    items: [
        {
            text: 'Item1',
        },
        {
            text: 'Item2',
            color: 'warning',
            badge: {label: '32', color: 'danger', variant: 'tag'},
        },
        {
            text: 'Item3',
        }
    ],
    badge: {label: '19', color: 'dark', variant: 'pill'}
})