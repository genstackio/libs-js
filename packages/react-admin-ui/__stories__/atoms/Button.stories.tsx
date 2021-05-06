import React from 'react';
import {s} from "../utils";
import {Button} from '../../src';

export default {
    title: 'Atoms/Button',
    component: Button,
    argTypes: {
        children: { control: 'text' },
        color: { control: {type: 'select'}, options: ['primary', 'secondary', 'default'] },
        variant: { control: {type: 'select'}, options: ['filled', 'outlined', 'contained'] },
        disabled: { control: 'boolean' }
    },

}

const Template = args => <Button {...args} />;

export const basic = s(Template, {children: "button"})
