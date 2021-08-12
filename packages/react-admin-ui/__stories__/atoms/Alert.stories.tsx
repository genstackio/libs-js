import { args, s, a } from '../utils';
import { Alert } from '../../src';
import data from '../data';

export default {
    title: 'Atoms/Alert',
    component: Alert,
    argTypes: a({
        color: args.color,
        variant: args.blockVariant,
        closable: args.closable,
        children: args.children,
    }),
};

export const basic = s(Alert, {
    children: data.common.content,
    color: 'secondary',
    variant: 'contained',
    closable: true,
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
            <Alert {...args} color={'dark'} closable />
            <Alert {...args} color={'primary'} variant={'outlined'} closable />
            <Alert {...args} color={'secondary'} variant={'outlined'} closable />
            <Alert {...args} color={'success'} variant={'outlined'} closable />
            <Alert {...args} color={'info'} variant={'outlined'} closable />
            <Alert {...args} color={'warning'} variant={'outlined'} />
            <Alert {...args} color={'danger'} variant={'outlined'} />
            <Alert {...args} color={'light'} variant={'outlined'} />
            <Alert {...args} color={'dark'} variant={'outlined'} />
        </div>
    ),
    {
        children: data.common.content,
    },
);
