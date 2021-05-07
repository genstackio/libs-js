import React from 'react';
import {s} from "../utils";
import {Badge} from '../../src';

export default {
    title: 'Atoms/Badge',
    component: Badge,
    argTypes: {
    },

}

const Template = args => (
    <div className={'flex flex row items-center space-x-6'}>
        <Badge {...args} color={'default'} text={'1'} />
        <Badge {...args} color={'secondary'} text={'2'} />
        <Badge {...args} color={'success'} text={'3'} />
        <Badge {...args} color={'info'} text={'4'} />
        <Badge {...args} color={'warning'} text={'5'} />
        <Badge {...args} color={'danger'} text={'6'} />
        <Badge {...args} color={'light'} text={'7'} />
        <Badge {...args} color={'dark'} text={'8'} />
    </div>
);

export const basic = s(Template, {variant: "pill"})
