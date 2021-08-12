import { args, s, a } from '../utils';
import { Avatars } from '../../src';
import data from '../data';

export default {
    title: 'Molecules/Avatars',
    component: Avatars,
    argTypes: a({
        items: args.items,
    }),
};

const Template = (args) => <Avatars {...args} />;

export const basic = s(Template, {
    items: [
        {
            name: data.user.name,
            image: data.user.image,
            size: 'sm',
        },
        {
            name: data.user.name,
            image: data.user.image,
            size: 'sm',
        },
        {
            name: data.user.name,
            image: data.user.image,
            size: 'sm',
        },
    ],
});

export const withStatuses = s(Template, {
    items: [
        {
            name: data.user.name,
            image: data.user.image,
            size: 'sm',
            status: 'online',
        },
        {
            name: data.user.name,
            image: data.user.image,
            size: 'sm',
            status: 'busy',
        },
        {
            name: data.user.name,
            image: data.user.image,
            size: 'sm',
            status: 'offline',
        },
    ],
});
