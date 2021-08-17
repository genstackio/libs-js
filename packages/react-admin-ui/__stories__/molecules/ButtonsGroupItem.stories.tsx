import { args, s, a } from '../utils';
import { ButtonsGroupItem } from '../../src';
import data from '../data';

export default {
    title: 'Molecules/ButtonsGroupItem',
    component: ButtonsGroupItem,
    argTypes: a({
        items: args.actions,
    }),
};

export const primary = s(ButtonsGroupItem, {
    color: 'primary',
    variant: 'contained',
    label: data.buttons.button1.label,
    target: data.buttons.button1.target,
    icon: data.common.icon,
});

export const secondary = s(ButtonsGroupItem, {
    color: 'secondary',
    variant: 'contained',
    label: data.buttons.button2.label,
    target: data.buttons.button2.target,
    icon: data.common.icon,
});

export const light = s(ButtonsGroupItem, {
    color: 'light',
    variant: 'contained',
    label: data.buttons.button3.label,
    target: data.buttons.button3.target,
});
