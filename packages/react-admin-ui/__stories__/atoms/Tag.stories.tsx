import React from 'react';
import {s} from "../utils";
import {Tag} from '../../src';

export default {
    title: 'Atoms/Tag',
    component: Tag,
    argTypes: {
        text: { control: 'text' },
    },

}

const Template = args => (
    <div className={'flex flex row items-center space-x-6'}>
        <Tag {...args} color={'default'} />
        <Tag {...args} color={'secondary'} />
        <Tag {...args} color={'success'} />
        <Tag {...args} color={'info'} />
        <Tag {...args} color={'warning'} />
        <Tag {...args} color={'danger'} />
        <Tag {...args} color={'light'} />
        <Tag {...args} color={'dark'} />
    </div>
);
export const basic = s(Template, {text: "je suis un tag"})
