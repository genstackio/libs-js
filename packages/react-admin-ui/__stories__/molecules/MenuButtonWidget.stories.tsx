import {MenuButtonWidget} from '../../src'
import {args, s, a} from "../utils";

export default {
    title: 'Molecules/MenuButtonWidget',
    component: MenuButtonWidget,
    argTypes: a({
        items: args.items,
        color: args.color,
    }),
}

const Template = args => <MenuButtonWidget {...args} />;

export const basic = s(Template,  {
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
