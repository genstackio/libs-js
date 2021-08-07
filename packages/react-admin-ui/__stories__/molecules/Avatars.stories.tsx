import { args, s, a } from '../utils';
import { Avatars } from '../../src';

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
            name: 'John Doe',
            image: {
                url: 'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
                alt: 'profile picture',
            },
            size: 'sm',
        },
        {
            name: 'John Doe',
            image: {
                url: 'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
                alt: 'profile picture',
            },
            size: 'sm',
        },
        {
            name: 'John Doe',
            image: {
                url: 'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
                alt: 'profile picture',
            },
            size: 'sm',
        },
    ],
});

export const withStatuses = s(Template, {
    items: [
        {
            name: 'John Doe',
            image: {
                url: 'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
                alt: 'profile picture',
            },
            size: 'sm',
            status: 'online',
        },
        {
            name: 'John Doe',
            image: {
                url: 'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
                alt: 'profile picture',
            },
            size: 'sm',
            status: 'busy',
        },
        {
            name: 'John Doe',
            image: {
                url: 'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
                alt: 'profile picture',
            },
            size: 'sm',
            status: 'offline',
        },
    ],
});
