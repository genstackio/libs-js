import React from 'react';
import {s} from "../utils";
import {Badge} from '../../src';

export default {
    title: 'Atoms/Badge',
    component: Badge,
    argTypes: {
        text: { control: 'text' },
        variant: { control: {type: 'select'}, options: ['pill', 'tag'], defaultValue: 'pill' },
        color: { control: {type: 'select'}, options: ['primary', 'secondary', 'success', 'info', 'warning', 'danger', 'light', 'dark'] },
    },

}

const Template = args => (<Badge {...args} />);

export const basic = s(Template, {})