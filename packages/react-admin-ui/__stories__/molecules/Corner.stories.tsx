import {args, s} from '../utils';
import {Corner} from '../../src';

export default {
    title: 'Molecules/Corner',
    component: Corner,
    argTypes: {
        color: args.color,
        variant: args.blockVariant,
        text: args.text,
        iconCorner: args.iconCorner
    },
}

const Template = args => (<Corner {...args} />);

export const basic = s(Template, {
    text: "je suis un tag",
    variant: 'contained',
    icon: 'account_balance_icon',
    color: 'primary',
});

export const two = s(Template, {
    items: [
        {
            text: "je suis tag 1",
            variant: 'outlined',
            iconCorner: 'settings',
            color: 'success',
        },
        {
            text: "je suis tag 2",
            variant: 'contained',
            iconCorner: 'notifications_none_icon',
            color: 'warning',
        }
    ]
});

export const three = s(Template, {
    items: [
        {
            text: "je suis tag 1",
            variant: 'outlined',
            iconCorner: 'settings',
            color: 'success',
        },
        {
            text: "je suis tag 2",
            variant: 'contained',
            iconCorner: 'notifications_none_icon',
            color: 'warning',
        },
        {
            text: "je suis tag 3",
            variant: 'contained',
            iconCorner: 'query_builder',
            color: 'danger',
        }
    ]
});