import React from 'react';
import {s} from "../utils";
import {Progress} from '../../src';

export default {
    title: 'Atoms/Progress',
    component: Progress,
    argTypes: {
        variant: { control: {type: 'select'}, options: ['linear', 'circular'] },
        progressValue: { control: {type: 'number'} },
    },
}

const Template = args => <Progress {...args} />;

export const basic = s(Template, {
    progressValue: 33,
})