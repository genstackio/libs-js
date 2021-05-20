import React from 'react';
import {s} from "../utils";
import {PeriodBlock} from '../../src';

export default {
    title: 'Atoms/PeriodBlock',
    component: PeriodBlock,
    argTypes: {
        periodblock: { control: 'text' },
    },

}

const Template = args => (<PeriodBlock {...args} />);
export const basic = s(Template, {
    text: 'Daily',
    value: '36%',
})