import React from 'react';
import {s} from "../../utils";
import {KpiBlock} from '../../../src';

export default {
    title: 'Organisms/Blocks/KpiBlock',
    component: KpiBlock,
    argTypes: {
        icon: { control: {type: 'object'} },
        name: { control: {type: 'text'} },
        quantity: { control: {type: 'number'} },
        color: { control: {type: 'select'}, options: ['primary', 'secondary', 'success', 'info', 'warning', 'danger', 'light', 'dark'] },
        variant: { control: {type: 'select'}, options: ['contained'], defaultValue: 'contained' },
    },
}

const Template = args => <KpiBlock {...args} />;

export const basic = s(Template, {
    icon: (<svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-database">
                <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
                <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
            </svg>),
    name: 'Earnings',
    quantity: 6659,
    bgIcon: (<svg opacity='0.2' width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" className="feather feather-database">
        <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
    </svg>),
});