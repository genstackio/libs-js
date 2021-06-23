import { args, s, a } from '../utils';
import { Button } from '../../src';

export default {
    title: 'Atoms/Button',
    component: Button,
    argTypes: a({
        children: args.children,
        color: args.color,
        variant: args.blockVariant,
        disabled: args.disabled,
        large: args.large,
        classes: args.classes,
        onClick: args.onClick,
    }),
};

const Template = (args) => <Button {...args} />;

export const basic = s(Template, {
    children: 'label',
    color: 'primary',
    variant: 'contained',
});

export const showcase = s(
    (args) => (
        <div className={'space-y-2'}>
            <p>FILLED</p>
            <div className={'flex items-center space-x-4'}>
                <Template color={'primary'}>{'primary'}</Template>
                <Template color={'secondary'}>{'secondary'}</Template>
                <Template color={'success'}>{'success'}</Template>
                <Template color={'info'}>{'info'}</Template>
                <Template color={'warning'}>{'warning'}</Template>
                <Template color={'danger'}>{'danger'}</Template>
                <Template color={'light'}>{'light'}</Template>
                <Template color={'dark'}>{'dark'}</Template>
            </div>
            <p>OUTLINED</p>
            <div className={'flex items-center space-x-4'}>
                <Template color={'primary'} variant={'outlined'}>
                    {'primary'}
                </Template>
                <Template color={'primary'} variant={'outlined'}>
                    {'primary'}
                </Template>
                <Template color={'secondary'} variant={'outlined'}>
                    {'secondary'}
                </Template>
                <Template color={'success'} variant={'outlined'}>
                    {'success'}
                </Template>
                <Template color={'info'} variant={'outlined'}>
                    {'info'}
                </Template>
                <Template color={'warning'} variant={'outlined'}>
                    {'warning'}
                </Template>
                <Template color={'danger'} variant={'outlined'}>
                    {'danger'}
                </Template>
                <Template color={'light'} variant={'outlined'}>
                    {'light'}
                </Template>
                <Template color={'dark'} variant={'outlined'}>
                    {'dark'}
                </Template>
            </div>
            <p>CONTAINED</p>
            <div className={'flex items-center space-x-4'}>
                <Template color={'primary'} variant={'contained'}>
                    {'primary'}
                </Template>
                <Template color={'secondary'} variant={'contained'}>
                    {'secondary'}
                </Template>
                <Template color={'success'} variant={'contained'}>
                    {'success'}
                </Template>
                <Template color={'info'} variant={'contained'}>
                    {'info'}
                </Template>
                <Template color={'warning'} variant={'contained'}>
                    {'warning'}
                </Template>
                <Template color={'danger'} variant={'contained'}>
                    {'danger'}
                </Template>
                <Template color={'light'} variant={'contained'}>
                    {'light'}
                </Template>
                <Template color={'dark'} variant={'contained'}>
                    {'dark'}
                </Template>
            </div>
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
                <Template color={'primary'} large>
                    {'primary'}
                </Template>
                <Template color={'secondary'} large>
                    {'secondary'}
                </Template>
            </div>
            <div className={'flex items-center space-x-4'}>
                <Template color={'primary'} variant={'outlined'} large>
                    {'primary'}
                </Template>
                <Template color={'secondary'} variant={'outlined'} large>
                    {'secondary'}
                </Template>
            </div>
            <div className={'flex items-center space-x-4'}>
                <Template color={'primary'} variant={'contained'} large>
                    {'primary'}
                </Template>
                <Template color={'secondary'} variant={'contained'} large>
                    {'secondary'}
                </Template>
            </div>
        </div>
    ),
    {},
);
