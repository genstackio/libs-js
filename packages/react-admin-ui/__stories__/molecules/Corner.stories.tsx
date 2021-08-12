import { args, s, a } from '../utils';
import { Corner } from '../../src';

export default {
    title: 'Molecules/Corner',
    component: Corner,
    argTypes: a({
        items: args.items,
    }),
};

export const basic = s(Corner, {
    items: [
        {
            text: 'Corner Tag 1',
            variant: 'outlined',
            iconCorner: 'settings',
            color: 'success',
        },
        {
            text: 'Corner Tag 2',
            variant: 'contained',
            iconCorner: 'settings',
            color: 'warning',
        },
    ],
});

export const withManyItems = s(Corner, {
    items: [
        {
            text: 'Corner Tag 1',
            variant: 'outlined',
            iconCorner: 'settings',
            color: 'success',
        },
        {
            text: 'Corner Tag 2',
            variant: 'contained',
            iconCorner: 'notifications_none_icon',
            color: 'warning',
        },
        {
            text: 'Corner Tag 3',
            variant: 'contained',
            iconCorner: 'query_builder',
            color: 'danger',
        },
        {
            text: 'Corner Tag 4',
            variant: 'contained',
            iconCorner: 'query_builder',
            color: 'danger',
        },
        {
            text: 'Corner Tag 5',
            variant: 'contained',
            iconCorner: 'query_builder',
            color: 'danger',
        },
        {
            text: 'Corner Tag 6',
            variant: 'contained',
            iconCorner: 'query_builder',
            color: 'danger',
        },
    ],
});
