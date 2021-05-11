import React from 'react';
import {s} from "../utils";
import {Text} from '../../src';

export default {
    title: 'Atoms/Text',
    component: Text,
    argTypes: {
        color: { control: {type:'select'}, options :['heading1', 'heading2', 'heading3', 'heading4', 'heading5', 'heading6'] },
        variant: { control: {type:'select'}, options :['text', 'title1', 'title2', 'title3', 'title4', 'title5', 'title6', 'body', 'overline', 'description', 'subtitle'] }
    },

}

const Template = args => <Text {...args}/>;

export const basic = s (Template, {
    text: 'texte',
    color: 'heading1',
    variant: 'text',
})
