import React from 'react';
import {s} from "../utils";
import {Avatar} from '../../src';

export default {
    title: 'Atoms/Avatar',
    component: Avatar,
    argTypes: {
        image: { control: {type: 'object'} },
        size: { control: {type: 'select'}, options: ['xs', 'sm', 'md', 'lg', 'xl'], defaultValue: 'md' },
        shape: { control: {type: 'select'}, options: ['circular', 'rounded'], defaultValue: 'circular'  },
        status: { control: {type: 'select'}, options: ['online', 'offline', 'busy'] },
    },
}

const Template = args => <Avatar {...args} />;

export const basic = s(Template, {
    image: {
        url: 'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        alt: 'profile picture'
    }
})