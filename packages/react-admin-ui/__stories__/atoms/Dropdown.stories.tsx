import React from 'react';
import {s} from "../utils";
import {Dropdown} from '../../src';

export default {
    title: 'Atoms/Dropdown',
    component: Dropdown,
    argTypes: {
        menuItems: { control: {type: 'object'} },
        color: { control: {type: 'select'}, options: ['primary', 'secondary', 'success', 'info', 'warning', 'danger', 'light', 'dark'] },
        variant: { control: {type: 'select'}, options: ['filled', 'outlined', 'contained'] },
    },

}

const Template = args => <Dropdown {...args} />;

export const basic = s(Template, {
    menuItems: [
        {name: 'Today'},
        {name: 'Tomorrow'},
        {name: 'Yesterday'},
    ]
});