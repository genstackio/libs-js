import { Fragment } from 'react';
import { args, s, a } from '../utils';
import { Button } from '../../src';
import data from '../data';
import preset from "../../lib/preset";

export default {
    title: 'Atoms/Button',
    component: Button,
    argTypes: a({
        children: args.children,
        color: args.color,
        variant: args.blockVariant,
        disabled: args.disabled,
        classes: args.classes,
        onClick: args.onClick,
        size: args.textSize,
    }),
};

export const basic = s(Button, {
    children: data.buttons.button1.label,
    color: 'primary',
    variant: 'contained',
});

export const withConfirmation = s(Button, {
    children: data.buttons.button1.label,
    color: 'primary',
    variant: 'contained',
    confirm: true,
});

export const withDeleteConfirmation = s(Button, {
    children: data.buttons.button1.label,
    color: 'primary',
    variant: 'contained',
    confirm: true,
    confirmKind: 'delete',
    confirmDanger: true,
});

export const withEndIcon = s(Button, {
    children: data.buttons.button1.label,
    color: 'primary',
    variant: 'contained',
    endIcon: 'fa-fas--arrow-right',
});

export const withLoading = s(Button, {
    children: data.buttons.button1.label,
    color: 'primary',
    variant: 'contained',
    endIcon: 'fa-fas--arrow-right',
    loading: true,
});

export const showcase = s(
    (args) => (
        <div className={'space-y-2'}>
            {preset.values('boxVariant').map((variant, i) => (
                <Fragment key={i}>
                    <p>{variant.toUpperCase()}</p>
                    <div className={'flex items-center space-x-4'}>
                        {preset.values('boxColor').map((color, j) => (
                            <Button key={`${i}-${j}`} color={color as any} variant={variant as any}>
                                {color}
                            </Button>
                        ))}
                    </div>
                </Fragment>
            ))}
            <p>DISABLED</p>
            <div className={'flex items-center space-x-4'}>
                <Button color={'primary'} disabled>
                    {'primary'}
                </Button>
                <Button color={'secondary'} disabled>
                    {'secondary'}
                </Button>
                <Button color={'success'} disabled>
                    {'success'}
                </Button>
                <Button color={'info'} disabled>
                    {'info'}
                </Button>
                <Button color={'warning'} disabled>
                    {'warning'}
                </Button>
                <Button color={'danger'} disabled>
                    {'danger'}
                </Button>
                <Button color={'light'} disabled>
                    {'light'}
                </Button>
                <Button color={'dark'} disabled>
                    {'dark'}
                </Button>
            </div>
            <div className={'flex items-center space-x-4'}>
                <Button color={'primary'} variant={'outlined'} disabled>
                    {'primary'}
                </Button>
                <Button color={'secondary'} variant={'outlined'} disabled>
                    {'secondary'}
                </Button>
                <Button color={'success'} variant={'outlined'} disabled>
                    {'success'}
                </Button>
                <Button color={'info'} variant={'outlined'} disabled>
                    {'info'}
                </Button>
                <Button color={'warning'} variant={'outlined'} disabled>
                    {'warning'}
                </Button>
                <Button color={'danger'} variant={'outlined'} disabled>
                    {'danger'}
                </Button>
                <Button color={'light'} variant={'outlined'} disabled>
                    {'light'}
                </Button>
                <Button color={'dark'} variant={'outlined'} disabled>
                    {'dark'}
                </Button>
            </div>
            <div className={'flex items-center space-x-4'}>
                <Button color={'primary'} variant={'contained'} disabled>
                    {'primary'}
                </Button>
                <Button color={'secondary'} variant={'contained'} disabled>
                    {'secondary'}
                </Button>
                <Button color={'success'} variant={'contained'} disabled>
                    {'success'}
                </Button>
                <Button color={'info'} variant={'contained'} disabled>
                    {'info'}
                </Button>
                <Button color={'warning'} variant={'contained'} disabled>
                    {'warning'}
                </Button>
                <Button color={'danger'} variant={'contained'} disabled>
                    {'danger'}
                </Button>
                <Button color={'light'} variant={'contained'} disabled>
                    {'light'}
                </Button>
                <Button color={'dark'} variant={'contained'} disabled>
                    {'dark'}
                </Button>
            </div>
            <p>LARGE</p>
            <div className={'flex items-center space-x-4'}>
                <Button color={'primary'} size={'xl'}>
                    {'primary'}
                </Button>
                <Button color={'secondary'} size={'xl'}>
                    {'secondary'}
                </Button>
            </div>
            <div className={'flex items-center space-x-4'}>
                <Button color={'primary'} variant={'outlined'} size={'xl'}>
                    {'primary'}
                </Button>
                <Button color={'secondary'} variant={'outlined'} size={'xl'}>
                    {'secondary'}
                </Button>
            </div>
            <div className={'flex items-center space-x-4'}>
                <Button color={'primary'} variant={'contained'} size={'xl'}>
                    {'primary'}
                </Button>
                <Button color={'secondary'} variant={'contained'} size={'xl'}>
                    {'secondary'}
                </Button>
            </div>
        </div>
    ),
    {},
);
