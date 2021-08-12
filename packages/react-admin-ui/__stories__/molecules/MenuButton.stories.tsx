import { MenuButton } from '../../src';
import { args, s, a } from '../utils';
import data from '../data';

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
    label: data.user.name,
    description: data.user.email,
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
    label: data.user.name,
    description: data.user.email,
    size: 'xs',
    image: data.user.image,
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
    label: data.user.name,
    description: data.user.email,
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
