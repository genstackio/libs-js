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

const Template = (args) => <Alert {...args} />;

export const basic = s(Template, {
    children: data.common.content,
    color: 'secondary',
    variant: 'contained',
    closable: true,
});

export const showcase = s(
    (args) => (
        <div className={'space-y-2'}>
            <Template {...args} color={'primary'} />
            <Template {...args} color={'secondary'} />
            <Template {...args} color={'success'} />
            <Template {...args} color={'info'} />
            <Template {...args} color={'warning'} closable />
            <Template {...args} color={'danger'} closable />
            <Template {...args} color={'light'} closable />
            <Template {...args} color={'dark'} closable />
            <Template {...args} color={'primary'} variant={'outlined'} closable />
            <Template {...args} color={'secondary'} variant={'outlined'} closable />
            <Template {...args} color={'success'} variant={'outlined'} closable />
            <Template {...args} color={'info'} variant={'outlined'} closable />
            <Template {...args} color={'warning'} variant={'outlined'} />
            <Template {...args} color={'danger'} variant={'outlined'} />
            <Template {...args} color={'light'} variant={'outlined'} />
            <Template {...args} color={'dark'} variant={'outlined'} />
        </div>
    ),
    {
        children: data.common.content,
    },
);
