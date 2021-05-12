import React from 'react';
import {s} from "../utils";
import {Avatars} from '../../src';

export default {
    title: 'Molecules/Avatars',
    component: Avatars,
    argTypes: {
        items: {control: {type: 'object'}},
    },
}

const Template = args => <Avatars {...args}  />;

export const basic = s(Template, {
    items : [
        {names:'John Doe', 
        image: {
            url: 'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            alt: 'profile picture'
        },
        size:'sm',
        },
        {names:'John Doe', 
        image: {
            url: 'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            alt: 'profile picture'
        },
        size:'sm',
        },
        {names:'John Doe', 
        image: {
            url: 'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            alt: 'profile picture'
        },
        size:'sm',
        },
    ]
    
})
