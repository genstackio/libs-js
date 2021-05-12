import React from 'react';
import {s} from "../utils";
import {Rating} from '../../src';

export default {
    title: 'Molecules/Rating',
    component: Rating,
    argTypes: { },
}

const Template = args => <Rating {...args} />;

export const basic = s(Template, {text: 'Eval'});
