import React from 'react';
import {s} from "../utils";
import {Alert} from '../../src';

export default {
    title: 'Atoms/Alert',
    component: Alert,
    argTypes: {
        color: { control: {type: 'select'}, options: ['default', 'secondary', 'success', 'info', 'warning', 'danger', 'light', 'dark'], defaultValue: 'default' },
    },
}

const Template = args => <Alert {...args} />;


export const basic = s(Template, {
    text: 'This is a info alert—check it out!',
    color: 'secondary',
})

export const showcase = s(args => (
    <div>
        <Template {...args} />
        <Template {...args} color={'secondary'} />
        <Template {...args} color={'success'} />
        <Template {...args} color={'info'} />
        <Template {...args} color={'warning'} />
        <Template {...args} color={'danger'} />
        <Template {...args} color={'light'} />
        <Template {...args} color={'dark'} />
    </div>
), {
    text: 'This is a info alert—check it out!',
    color: 'default',
})
