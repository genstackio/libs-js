import React from 'react';
import {s} from "../utils";
import {Button} from '../../src';

export default {
    title: 'Atoms/Button',
    component: Button,
    argTypes: {
        children: { control: 'text' },
        color: { control: {type: 'select'}, options: ['primary', 'secondary', 'success', 'info', 'warning', 'danger', 'light', 'dark'] },
        variant: { control: {type: 'select'}, options: ['filled', 'outlined', 'contained'] },
        disabled: { control: 'boolean' }
    },
}


const Template = args => <Button {...args} />;

export const basic = s(Template, {
    children: 'label',
    color: 'primary',
    variant: 'contained',
});

export const showcase = s(args => (
    <div className={'flex flex-col space-y-4'}>
        <p>FILLED</p>
        <div className={'flex flex-row items-center space-x-4'}>
            <Template children={'primary'} color={'primary'} />
            <Template children={'secondary'} color={'secondary'} />
            <Template children={'success'} color={'success'} />
            <Template children={'info'} color={'info'} />
            <Template children={'warning'} color={'warning'} />
            <Template children={'danger'} color={'danger'} />
            <Template children={'light'} color={'light'} />
            <Template children={'dark'} color={'dark'} />
        </div>
        <p>OUTLINED</p>
        <div className={'flex flex-row items-center space-x-4'}>
            <Template children={'primary'} color={'primary'} variant={'outlined'} />
            <Template children={'primary'} color={'primary'} variant={'outlined'} />
            <Template children={'secondary'} color={'secondary'} variant={'outlined'} />
            <Template children={'success'} color={'success'} variant={'outlined'} />
            <Template children={'info'} color={'info'} variant={'outlined'} />
            <Template children={'warning'} color={'warning'} variant={'outlined'} />
            <Template children={'danger'} color={'danger'} variant={'outlined'} />
            <Template children={'light'} color={'light'} variant={'outlined'} />
            <Template children={'dark'} color={'dark'} variant={'outlined'} />
        </div>
        <p>CONTAINED</p>
        <div className={'flex flex-row items-center space-x-4'}>
            <Template children={'primary'} color={'primary'} variant={'contained'} />
            <Template children={'secondary'} color={'secondary'} variant={'contained'} />
            <Template children={'success'} color={'success'} variant={'contained'} />
            <Template children={'info'} color={'info'} variant={'contained'} />
            <Template children={'warning'} color={'warning'} variant={'contained'} />
            <Template children={'danger'} color={'danger'} variant={'contained'} />
            <Template children={'light'} color={'light'} variant={'contained'} />
            <Template children={'dark'} color={'dark'} variant={'contained'} />
        </div>
        <p>DISABLED</p>
        <div className={'flex flex-row items-center space-x-4'}>
            <Template children={'primary'} color={'primary'} disabled />
            <Template children={'secondary'} color={'secondary'} disabled />
            <Template children={'success'} color={'success'} disabled />
            <Template children={'info'} color={'info'} disabled />
            <Template children={'warning'} color={'warning'} disabled />
            <Template children={'danger'} color={'danger'} disabled />
            <Template children={'light'} color={'light'} disabled />
            <Template children={'dark'} color={'dark'} disabled />
        </div>
        <div className={'flex flex-row items-center space-x-4'}>
            <Template children={'primary'} color={'primary'} variant={'outlined'} disabled />
            <Template children={'secondary'} color={'secondary'} variant={'outlined'} disabled />
            <Template children={'success'} color={'success'} variant={'outlined'} disabled />
            <Template children={'info'} color={'info'} variant={'outlined'} disabled />
            <Template children={'warning'} color={'warning'} variant={'outlined'} disabled />
            <Template children={'danger'} color={'danger'} variant={'outlined'} disabled />
            <Template children={'light'} color={'light'} variant={'outlined'} disabled />
            <Template children={'dark'} color={'dark'} variant={'outlined'} disabled />
        </div>
        <div className={'flex flex-row items-center space-x-4'}>
            <Template children={'primary'} color={'primary'} variant={'contained'} disabled />
            <Template children={'secondary'} color={'secondary'} variant={'contained'} disabled />
            <Template children={'success'} color={'success'} variant={'contained'} disabled />
            <Template children={'info'} color={'info'} variant={'contained'} disabled />
            <Template children={'warning'} color={'warning'} variant={'contained'} disabled />
            <Template children={'danger'} color={'danger'} variant={'contained'} disabled />
            <Template children={'light'} color={'light'} variant={'contained'} disabled />
            <Template children={'dark'} color={'dark'} variant={'contained'} disabled />
        </div>
        <p>LARGE</p>
        <div className={'flex flex-row items-center space-x-4'}>
            <Template children={'primary'} color={'primary'} large />
            <Template children={'secondary'} color={'secondary'} large />
        </div>
        <div className={'flex flex-row items-center space-x-4'}>
            <Template children={'primary'} color={'primary'} variant={'outlined'} large />
            <Template children={'secondary'} color={'secondary'} variant={'outlined'} large />
        </div>
        <div className={'flex flex-row items-center space-x-4'}>
            <Template children={'primary'} color={'primary'} variant={'contained'} large />
            <Template children={'secondary'} color={'secondary'} variant={'contained'} large />
        </div>
    </div>
), {})