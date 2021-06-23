import {MenuButton} from '../../src'
import {args, s, a} from "../utils";

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
}

const Template = args => <MenuButton {...args} />;

export const basic = s(Template,  {
    image: {
        url: 'https://picsum.photos/40/40',
        alt: 'picture',
    },
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
})
