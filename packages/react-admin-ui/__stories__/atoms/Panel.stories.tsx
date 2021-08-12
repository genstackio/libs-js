import { args, s, a } from '../utils';
import { Panel } from '../../src';
import data from '../data';

export default {
    title: 'Atoms/Panel',
    component: Panel,
    argTypes: a({
        color: args.color,
        variant: args.blockVariant,
        children: args.children,
    }),
};

export const basic = s(Panel, {
    children: data.common.content,
    color: 'secondary',
    variant: 'contained',
});

export const showcase = s(
    (args) => (
        <div className={'space-y-2'}>
            <Panel {...args} color={'primary'} />
            <Panel {...args} color={'secondary'} />
            <Panel {...args} color={'success'} />
            <Panel {...args} color={'info'} />
            <Panel {...args} color={'warning'} closable={true} />
            <Panel {...args} color={'danger'} closable={true} />
            <Panel {...args} color={'light'} closable={true} />
            <Panel {...args} color={'dark'} closable={true} />
            <Panel {...args} color={'primary'} variant={'outlined'} closable={true} />
            <Panel {...args} color={'secondary'} variant={'outlined'} closable={true} />
            <Panel {...args} color={'success'} variant={'outlined'} closable={true} />
            <Panel {...args} color={'info'} variant={'outlined'} closable={true} />
            <Panel {...args} color={'warning'} variant={'outlined'} />
            <Panel {...args} color={'danger'} variant={'outlined'} />
            <Panel {...args} color={'light'} variant={'outlined'} />
            <Panel {...args} color={'dark'} variant={'outlined'} />
        </div>
    ),
    {
        children: data.common.content,
    },
);
