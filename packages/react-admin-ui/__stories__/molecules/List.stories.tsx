import React from 'react';
import {s} from "../utils";
import {List} from '../../src';

export default {
    title: 'Molecules/List',
    component: List,
    argTypes: {
        text: { control: 'text' },
        variant: { control: {type: 'select'}, options: ['pill', 'tag'], defaultValue: 'pill' },
        color: { control: {type: 'select'}, options: ['default', 'secondary', 'success', 'info', 'warning', 'danger', 'light', 'dark'] },
    },

}

const Template = args => <List {...args} />;
export const basic = s(Template, {
    items: [
        {
            text: 'Item1',
            variant: 'pill',
            color: 'success',
        },
        {
            text: 'Item2',
            variant: 'tag',
        },
        {
            text: 'Item3',
            variant: 'pill',
        }
    ]
})
