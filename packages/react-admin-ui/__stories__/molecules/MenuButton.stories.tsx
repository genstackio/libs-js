import { MenuButton } from '../../src';
import { args, s, a } from '../utils';

export default {
    title: 'Molecules/MenuButton',
    component: MenuButton,
    argTypes: a({
        image: args.image,
        label: args.label,
        description: args.description,
        items: args.items,
        color: args.color,
    }),
};

const Template = (args) => <MenuButton {...args} />;

export const basic = s(Template, {
    label: 'John Doe',
    description: 'Admin',
    items: [
        {
            icon: 'person',
            label: 'Account',
            target: 'https://www.google.com/',
        },
        {
            icon: 'settings',
            label: 'Settings',
            target: 'https://www.google.com/',
        },
        {
            icon: 'exit_to_app',
            label: 'Logout',
            target: () => alert('Logout'),
        },
    ],
});

export const withImage = s(Template, {
    label: 'John Doe',
    description: 'Admin',
    size: 'xs',
    image: {
        url: 'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        alt: 'profile picture',
    },
    items: [
        {
            icon: 'person',
            label: 'Account',
            target: 'https://www.google.com/',
        },
        {
            icon: 'settings',
            label: 'Settings',
            target: 'https://www.google.com/',
        },
        {
            icon: 'exit_to_app',
            label: 'Logout',
            target: () => alert('Logout'),
        },
    ],
});

export const withAvatar = s(Template, {
    label: 'John Doe',
    description: 'Admin',
    size: 'xs',
    avatar: true,
    items: [
        {
            icon: 'person',
            label: 'Account',
            target: 'https://www.google.com/',
        },
        {
            icon: 'settings',
            label: 'Settings',
            target: 'https://www.google.com/',
        },
        {
            icon: 'exit_to_app',
            label: 'Logout',
            target: () => alert('Logout'),
        },
    ],
});
