import { Fragment } from 'react';
import { args, s, a } from '../utils';
import { Button } from '../../src';
import { boxColors } from '../../src/mappings/box-colors';
import { boxVariants } from '../../lib/mappings/box-variants';

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

const Template = (args) => <Button {...args} />;

export const basic = s(Template, {
    children: 'label',
    color: 'primary',
    variant: 'contained',
});

export const withConfirmation = s(Template, {
    children: 'label',
    color: 'primary',
    variant: 'contained',
    confirm: true,
});

export const withDeleteConfirmation = s(Template, {
    children: 'label',
    color: 'primary',
    variant: 'contained',
    confirm: true,
    confirmKind: 'delete',
    confirmDanger: true,
});

export const withEndIcon = s(Template, {
    children: 'label',
    color: 'primary',
    variant: 'contained',
    endIcon: 'fa-fas--arrow-right',
});

export const withLoading = s(Template, {
    children: 'label',
    color: 'primary',
    variant: 'contained',
    endIcon: 'fa-fas--arrow-right',
    loading: true,
});

export const showcase = s(
    (args) => (
        <div className={'space-y-2'}>
            {Object.keys(boxVariants).map((variant, i) => (
                <Fragment key={i}>
                    <p>{variant.toUpperCase()}</p>
                    <div className={'flex items-center space-x-4'}>
                        {Object.keys(boxColors).map((color, j) => (
                            <Template key={`${i}-${j}`} color={color} variant={variant}>
                                {color}
                            </Template>
                        ))}
                    </div>
                </Fragment>
            ))}
            <p>DISABLED</p>
            <div className={'flex items-center space-x-4'}>
                <Template color={'primary'} disabled>
                    {'primary'}
                </Template>
                <Template color={'secondary'} disabled>
                    {'secondary'}
                </Template>
                <Template color={'success'} disabled>
                    {'success'}
                </Template>
                <Template color={'info'} disabled>
                    {'info'}
                </Template>
                <Template color={'warning'} disabled>
                    {'warning'}
                </Template>
                <Template color={'danger'} disabled>
                    {'danger'}
                </Template>
                <Template color={'light'} disabled>
                    {'light'}
                </Template>
                <Template color={'dark'} disabled>
                    {'dark'}
                </Template>
            </div>
            <div className={'flex items-center space-x-4'}>
                <Template color={'primary'} variant={'outlined'} disabled>
                    {'primary'}
                </Template>
                <Template color={'secondary'} variant={'outlined'} disabled>
                    {'secondary'}
                </Template>
                <Template color={'success'} variant={'outlined'} disabled>
                    {'success'}
                </Template>
                <Template color={'info'} variant={'outlined'} disabled>
                    {'info'}
                </Template>
                <Template color={'warning'} variant={'outlined'} disabled>
                    {'warning'}
                </Template>
                <Template color={'danger'} variant={'outlined'} disabled>
                    {'danger'}
                </Template>
                <Template color={'light'} variant={'outlined'} disabled>
                    {'light'}
                </Template>
                <Template color={'dark'} variant={'outlined'} disabled>
                    {'dark'}
                </Template>
            </div>
            <div className={'flex items-center space-x-4'}>
                <Template color={'primary'} variant={'contained'} disabled>
                    {'primary'}
                </Template>
                <Template color={'secondary'} variant={'contained'} disabled>
                    {'secondary'}
                </Template>
                <Template color={'success'} variant={'contained'} disabled>
                    {'success'}
                </Template>
                <Template color={'info'} variant={'contained'} disabled>
                    {'info'}
                </Template>
                <Template color={'warning'} variant={'contained'} disabled>
                    {'warning'}
                </Template>
                <Template color={'danger'} variant={'contained'} disabled>
                    {'danger'}
                </Template>
                <Template color={'light'} variant={'contained'} disabled>
                    {'light'}
                </Template>
                <Template color={'dark'} variant={'contained'} disabled>
                    {'dark'}
                </Template>
            </div>
            <p>LARGE</p>
            <div className={'flex items-center space-x-4'}>
                <Template color={'primary'} size={'xl'}>
                    {'primary'}
                </Template>
                <Template color={'secondary'} size={'xl'}>
                    {'secondary'}
                </Template>
            </div>
            <div className={'flex items-center space-x-4'}>
                <Template color={'primary'} variant={'outlined'} size={'xl'}>
                    {'primary'}
                </Template>
                <Template color={'secondary'} variant={'outlined'} size={'xl'}>
                    {'secondary'}
                </Template>
            </div>
            <div className={'flex items-center space-x-4'}>
                <Template color={'primary'} variant={'contained'} size={'xl'}>
                    {'primary'}
                </Template>
                <Template color={'secondary'} variant={'contained'} size={'xl'}>
                    {'secondary'}
                </Template>
            </div>
        </div>
    ),
    {},
);
