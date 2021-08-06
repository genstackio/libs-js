import { args, s, a } from '../utils';
import { MenuFold } from '../../src';

export default {
    title: 'Atoms/MenuFold',
    component: MenuFold,
    argTypes: a({
        label: args.label,
        icon: args.icon,
        active: args.flag,
        badges: args.badges,
        items: args.items,
        className: args._disabled,
        color: args.color,
        variant: args.boxVariant,
    }),
};

const Template = (args) => <MenuFold {...args} />;

export const basic = s(Template, {
    label: 'Dashboards',
    icon: 'home',
    active: false,
    items: [
        {
            label: 'Default',
            target: () => alert('click'),
            active: false,
        },
        {
            label: 'Ecommerce',
            target: 'https://www.google.com/webhp?hl=fr&sa=X&ved=0ahUKEwj8oNu2_uvwAhUiBmMBHeFQB30QPAgI',
            active: false,
        },
    ],
});

export const withBadge = s(Template, {
    label: 'Dashboards',
    icon: 'home',
    active: false,
    badges: [
        {
            type: 'tag',
            variant: 'contained',
            text: '2',
            color: 'success',
        },
    ],
    items: [
        {
            label: 'Default',
            target: () => alert('click'),
            active: false,
        },
        {
            label: 'Ecommerce',
            target: 'https://www.google.com/webhp?hl=fr&sa=X&ved=0ahUKEwj8oNu2_uvwAhUiBmMBHeFQB30QPAgI',
            active: false,
        },
    ],
});

export const withManyItems = s(Template, {
    label: 'Dashboards',
    icon: 'home',
    active: false,
    items: [
        {
            label: 'Default',
            target: () => alert('click'),
            active: false,
        },
        {
            label: 'Ecommerce',
            target: 'https://www.google.com/webhp?hl=fr&sa=X&ved=0ahUKEwj8oNu2_uvwAhUiBmMBHeFQB30QPAgI',
            active: false,
        },
        {
            label: 'Marketplace',
            target: () => alert('click'),
            active: false,
        },
        {
            label: 'Informations',
            target: 'https://www.google.com/webhp?hl=fr&sa=X&ved=0ahUKEwj8oNu2_uvwAhUiBmMBHeFQB30QPAgI',
            active: false,
        },
        {
            label: 'Latest News',
            target: () => alert('click'),
            active: false,
        },
        {
            label: 'Contact Us',
            target: 'https://www.google.com/webhp?hl=fr&sa=X&ved=0ahUKEwj8oNu2_uvwAhUiBmMBHeFQB30QPAgI',
            active: false,
        },
    ],
});
