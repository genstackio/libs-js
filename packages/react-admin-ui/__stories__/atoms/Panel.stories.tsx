import {args, s} from "../utils";
import {Panel} from '../../src';

export default {
    title: 'Atoms/Panel',
    component: Panel,
    argTypes: {
        color: args.color,
        variant: args.blockVariant,
        children: args.children,
    },
}

const Template = args => <Panel {...args} />;

export const basic = s(Template, {
    children: 'This is a info panel—check it out!',
    color: 'secondary',
    variant: 'contained',
})

export const showcase = s(args => (
    <div className={'space-y-2'}>
        <Template {...args} color={'primary'} />
        <Template {...args} color={'secondary'} />
        <Template {...args} color={'success'} />
        <Template {...args} color={'info'} />
        <Template {...args} color={'warning'} closable={true} />
        <Template {...args} color={'danger'} closable={true} />
        <Template {...args} color={'light'} closable={true} />
        <Template {...args} color={'dark'} closable={true} />
        <Template {...args} color={'primary'} variant={'outlined'} closable={true} />
        <Template {...args} color={'secondary'} variant={'outlined'} closable={true} />
        <Template {...args} color={'success'} variant={'outlined'} closable={true} />
        <Template {...args} color={'info'} variant={'outlined'} closable={true} />
        <Template {...args} color={'warning'} variant={'outlined'} />
        <Template {...args} color={'danger'} variant={'outlined'} />
        <Template {...args} color={'light'} variant={'outlined'} />
        <Template {...args} color={'dark'} variant={'outlined'} />
    </div>
    ), {
        children: 'This is a info panel—check it out!',
    }
)