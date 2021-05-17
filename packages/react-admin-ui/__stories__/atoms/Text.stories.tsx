import React from 'react';
import {s} from "../utils";
import {Text} from '../../src';

export default {
    title: 'Atoms/Text',
    component: Text,
    argTypes: {
        color: { control: {type: 'select'}, options: ['inherit', 'primary', 'secondary', 'success', 'info', 'warning', 'danger', 'light', 'dark'] },
        variant: { control: {type:'select'}, options :['title1', 'title2', 'title3', 'title4', 'title5', 'title6', 'subtitle', 'underline', 'body', 'description'] }
    },

}

const Template = args => <Text {...args}/>;

export const basic = s (Template, {
    text: 'texte',
    color: 'inherit',
    variant: 'body',
})