import { args, s, a } from '../utils';
import { ButtonsGroup } from '../../src';
import data from '../data';

export default {
    title: 'Molecules/ButtonsGroup',
    component: ButtonsGroup,
    argTypes: a({
        items: args.actions,
    }),
};

export const basic = s(ButtonsGroup, {
    items: [
        {
            color: 'primary',
            variant: 'contained',
            label: data.buttons.button1.label,
            target: data.buttons.button1.target,
        },
        {
            color: 'secondary',
            variant: 'contained',
            label: data.buttons.button2.label,
            target: data.buttons.button2.target,
        },
        {
            color: 'light',
            variant: 'contained',
            label: data.buttons.button3.label,
            target: data.buttons.button3.target,
        },
    ],
});

export const withIcon = s(ButtonsGroup, {
    items: [
        {
            color: 'primary',
            variant: 'contained',
            label: data.buttons.button1.label,
            target: data.buttons.button1.target,
            icon: data.common.icon,
        },
        {
            color: 'secondary',
            variant: 'contained',
            label: data.buttons.button2.label,
            target: data.buttons.button2.target,
            icon: data.common.icon,
        },
        {
            color: 'light',
            variant: 'contained',
            label: data.buttons.button3.label,
            target: data.buttons.button3.target,
        },
    ],
});
