import { args, s, a } from '../utils';
import { Breadcrumb } from '../../src';

export default {
    title: 'Molecules/Breadcrumb',
    component: Breadcrumb,
    argTypes: a({
        items: args.items,
        color: args.color,
        toRight: args.toRight,
    }),
};

export const basic = s(Breadcrumb, {
    items: [
        {
            label: 'Home',
            target: 'https://www.google.com/',
        },
        {
            label: 'Library',
            target: 'https://www.google.com/',
        },
        {
            label: 'Data',
            target: 'https://www.google.com/',
        },
    ],
});

export const manyItems = s(Breadcrumb, {
    items: [
        {
            label: 'Home',
            target: 'https://www.google.com',
        },
        {
            label: 'Library',
            target: 'https://www.google.com/',
        },
        {
            label: 'Data',
            target: 'https://www.google.com/',
        },
        {
            label: 'Users',
            target: 'https://www.google.com/',
        },
        {
            label: 'John',
            target: 'https://www.google.com/',
        },
        {
            label: 'Activities',
            target: 'https://www.google.com/',
        },
        {
            label: 'Monday',
            target: 'https://www.google.com/',
        },
    ],
});
