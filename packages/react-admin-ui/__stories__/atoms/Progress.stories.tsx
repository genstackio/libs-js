import React from 'react';
import {s} from "../utils";
import {Progress} from '../../src';

export default {
    title: 'Atoms/Progress',
    component: Progress,
    argTypes: { },
}

const Template = args => <Progress {...args} />;

export const basic = s(Template, {})
