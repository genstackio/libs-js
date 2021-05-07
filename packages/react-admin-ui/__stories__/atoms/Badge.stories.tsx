import React from 'react';
import {s} from "../utils";
import {Badge} from '../../src';

export default {
    title: 'Atoms/Badge',
    component: Badge,
    argTypes: {
        children: { control: 'text' },
        color: { control: {type: 'select'}, options: ['primary', 'secondary', 'default'] },
        variant: { control: {type: 'select'}, options: ['filled', 'outlined', 'contained'] },
        disabled: { control: 'boolean' }
    },

}

const Template = args => <Badge {...args} />;

export const basic = s(Template, {variant: "pill"})
