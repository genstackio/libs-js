import React from 'react';
import {s} from "../utils";
import {AlertPanel} from '../../src';

export default {
    title: 'Molecules/AlertPanel',
    component: AlertPanel,
    argTypes: {
        color: { control: {type: 'select'}, options: ['primary', 'secondary', 'success', 'info', 'warning', 'danger', 'light', 'dark'] },
        variant: { control: {type: 'select'}, options: ['filled', 'outlined', 'contained'] },
        closable: { control: {type: 'boolean'} },
    },
}

const Template = args => (
    <AlertPanel {...args}>
        <div>Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</div>
    </AlertPanel>
)

export const basic = s(Template, {
    title: 'Well done!',
});