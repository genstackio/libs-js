import React from 'react';
import {s} from "../utils";
import {Pill} from '../../src';

export default {
    title: 'Atoms/Pill',
    component: Pill,
    argTypes: {
        text: { control: 'text' },
    },

}

const Template = args => (
    <div className={'flex flex row items-center space-x-6'}>
        <Pill {...args} color={'default'} />
        <Pill {...args} color={'secondary'} />
        <Pill {...args} color={'success'} />
        <Pill {...args} color={'info'} />
        <Pill {...args} color={'warning'} />
        <Pill {...args} color={'danger'} />
        <Pill {...args} color={'light'} />
        <Pill {...args} color={'dark'} />
    </div>
);
export const basic = s(Template, {text: "8"})
