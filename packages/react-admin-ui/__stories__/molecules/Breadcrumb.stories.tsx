import React from 'react';
import {s} from "../utils";
import {Breadcrumb} from '../../src';

export default {
    title: 'Molecules/Breadcrumb',
    component: Breadcrumb,
    argTypes: {
        items: { control: {type: 'object'} },
        color: { control: {type: 'select'}, options: ['primary', 'secondary', 'success', 'info', 'warning', 'danger', 'light', 'dark'] },
    },
}

const Template = args => <Breadcrumb {...args} />

export const basic = s(Template, {
    items: [
        {
            label: "Home",
            target: "https://www.google.com/",
        },
        {
            label: "Library",
            target: "https://www.google.com/",
        },
        {
            label: "Data",
            target: "https://www.google.com/",
        },
    ]
});