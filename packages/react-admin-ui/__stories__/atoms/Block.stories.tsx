import React from 'react';
import {s} from "../utils";
import {Block} from '../../src';

export default {
    title: 'Atoms/Block',
    component: Block,
    argTypes: {
        title: {control: {type: 'text'}},
        children: {control: {type: 'text'}},
        color: { control: {type: 'select'}, options: ['primary', 'secondary', 'success', 'info', 'warning', 'danger', 'light', 'dark'] },
        variant: { control: {type: 'select'}, options: ['filled', 'outlined', 'contained'] },
    },

}

const Template = args => <Block {...args} />;

export const basic = s(Template, {
    title: "this is the title",
    children: "this is the content",
})
