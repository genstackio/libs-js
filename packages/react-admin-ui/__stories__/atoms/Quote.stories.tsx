import React from 'react';
import {s} from "../utils";
import {Quote} from '../../src';

export default {
    title: 'Atoms/Quote',
    component: Text,
    argTypes: {
        variant: { control: {type:'select'}, options: ['left', 'center', 'right'] },
    },

}

const Template = args => <Quote {...args}/>;

export const basic = s (Template, {
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.',
    title: 'Someone famous in Source Title',
    variant: 'left',
})