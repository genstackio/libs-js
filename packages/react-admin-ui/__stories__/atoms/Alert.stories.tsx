import { args, s, a } from '../utils';
import { Alert } from '../../src';
import data from '../data';

export default {
    title: 'Atoms/Alert',
    component: Alert,
    argTypes: a({
        b: args.border,
        color: args.color,
        variant: args.blockVariant,
        closable: args.closable,
        children: args.children,
    }),
};

export const basic = s(Alert, {
    children: data.common.content,
});

export const closable = s(Alert, {
    children: data.common.content,
    color: 'secondary',
    variant: 'contained',
    closable: true,
});

export const withTitle = s(Alert, {
    children: data.common.content,
    color: 'secondary',
    variant: 'contained',
    title: data.common.title,
});

export const closableWithTitle = s(Alert, {
    children: data.common.content,
    color: 'secondary',
    variant: 'contained',
    title: data.common.title,
    closable: true,
});

export const withChildrenParts = s(Alert, {
    children: (
        <>
            <div>(1) {data.common.content}</div>
            <div>(2) {data.common.content}</div>
            <div>(3) {data.common.content}</div>
        </>
    ),
});

export const withButton = s(Alert, {
    children: data.common.content,
    color: 'secondary',
    variant: 'contained',
    closable: true,
    btnLabel: data.buttons.button1.label,
    btnTarget: data.buttons.button1.target,
    btnType: 'filled',
    btnColor: 'secondary',
});

export const withIcon = s(Alert, {
    children: data.common.content,
    color: 'secondary',
    variant: 'contained',
    closable: true,
    icon: data.common.icon,
});

export const showcase = s(
    (args) => (
        <div className={'space-y-2'}>
            <Alert {...args} color={'primary'} />
            <Alert {...args} color={'secondary'} />
            <Alert {...args} color={'success'} />
            <Alert {...args} color={'info'} />
            <Alert {...args} color={'warning'} closable />
            <Alert {...args} color={'danger'} closable />
            <Alert {...args} color={'light'} closable />
            <Alert {...args} color={'clear'} closable />
            <Alert {...args} color={'dark'} closable />
            <Alert {...args} color={'primary'} variant={'outlined'} closable />
            <Alert {...args} color={'secondary'} variant={'outlined'} closable />
            <Alert {...args} color={'success'} variant={'outlined'} closable />
            <Alert {...args} color={'info'} variant={'outlined'} closable />
            <Alert {...args} color={'warning'} variant={'outlined'} />
            <Alert {...args} color={'danger'} variant={'outlined'} />
            <Alert {...args} color={'light'} variant={'outlined'} />
            <Alert {...args} color={'clear'} variant={'outlined'} />
            <Alert {...args} color={'dark'} variant={'outlined'} />
        </div>
    ),
    {
        children: data.common.content,
    },
);
