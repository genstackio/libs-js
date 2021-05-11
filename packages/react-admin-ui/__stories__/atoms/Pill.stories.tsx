import React from 'react';
import {s} from "../utils";
import {Pill} from '../../src';

export default {
    title: 'Atoms/Pill',
    component: Pill,
    argTypes: {
        text: { control: 'text' },
        color: { control: {type: 'select'}, options: ['default', 'secondary', 'success', 'info', 'warning', 'danger', 'light', 'dark'], defaultValue: 'default' },
    },

}

const Template = args => (<Pill {...args} />);
export const basic = s(Template, {text: "8"})
