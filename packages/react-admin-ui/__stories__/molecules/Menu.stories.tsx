import { args, s, a } from '../utils';
import { Menu } from '../../src';

export default {
    title: 'Molecules/Menu',
    component: Menu,
    argTypes: a({
        className: args._disabled,
        items: args.items,
        color: args.color,
        variant: args.boxVariant,
        p: args.padding,
    }),
};

export const basic = s(Menu, {
    items: [
        {
            label: 'General',
            type: 'section',
            description: 'Dashboards, Widgets & Layout',
        },
        {
            type: 'menu',
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
                    target: 'https://www.google.com/webhp?hl=fr&sa=X&ved=0ahUKEwj8oNu2_uvwAhUiBmMBHeFQB30QPAgI',
                    active: false,
                },
                {
                    label: 'Ecommerce',
                    target: 'https://www.google.com/webhp?hl=fr&sa=X&ved=0ahUKEwj8oNu2_uvwAhUiBmMBHeFQB30QPAgI',
                    active: false,
                },
            ],
        },
        {
            type: 'item',
            label: 'Calendar',
            icon: 'calendar_today',
            target: 'https://www.google.com/webhp?hl=fr&sa=X&ved=0ahUKEwj8oNu2_uvwAhUiBmMBHeFQB30QPAgI',
            active: false,
        },
        {
            type: 'menu',
            label: 'Widgets',
            icon: 'airplay',
            active: false,
            items: [
                {
                    label: 'General',
                    target: 'https://www.google.com/webhp?hl=fr&sa=X&ved=0ahUKEwj8oNu2_uvwAhUiBmMBHeFQB30QPAgI',
                    active: false,
                },
                {
                    label: 'Chart',
                    target: 'https://www.google.com/webhp?hl=fr&sa=X&ved=0ahUKEwj8oNu2_uvwAhUiBmMBHeFQB30QPAgI',
                    active: false,
                },
            ],
        },
    ],
});

export const withActive = s(Menu, {
    items: [
        {
            label: 'General',
            type: 'section',
            description: 'Dashboards, Widgets & Layout',
        },
        {
            type: 'menu',
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
                    target: 'https://www.google.com/webhp?hl=fr&sa=X&ved=0ahUKEwj8oNu2_uvwAhUiBmMBHeFQB30QPAgI',
                    active: false,
                },
                {
                    label: 'Ecommerce',
                    target: 'https://www.google.com/webhp?hl=fr&sa=X&ved=0ahUKEwj8oNu2_uvwAhUiBmMBHeFQB30QPAgI',
                    active: false,
                },
            ],
        },
        {
            type: 'item',
            label: 'Calendar',
            icon: 'calendar_today',
            target: 'https://www.google.com/webhp?hl=fr&sa=X&ved=0ahUKEwj8oNu2_uvwAhUiBmMBHeFQB30QPAgI',
            active: true,
        },
        {
            type: 'menu',
            label: 'Widgets',
            icon: 'airplay',
            active: false,
            items: [
                {
                    label: 'General',
                    target: 'https://www.google.com/webhp?hl=fr&sa=X&ved=0ahUKEwj8oNu2_uvwAhUiBmMBHeFQB30QPAgI',
                    active: false,
                },
                {
                    label: 'Chart',
                    target: 'https://www.google.com/webhp?hl=fr&sa=X&ved=0ahUKEwj8oNu2_uvwAhUiBmMBHeFQB30QPAgI',
                    active: false,
                },
            ],
        },
    ],
});
