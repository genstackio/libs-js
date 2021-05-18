import {s} from "../utils";
import {Alert} from '../../src';

export default {
    title: 'Atoms/Alert',
    component: Alert,
    argTypes: {
        color: { control: {type: 'select'}, options: ['primary', 'secondary', 'success', 'info', 'warning', 'danger', 'light', 'dark'] },
        variant: { control: {type: 'select'}, options: ['filled', 'outlined', 'contained'] },
        closable: { control: {type: 'boolean'} },
    },
}

const Template = args => <Alert {...args} />;

export const basic = s(Template, {
    children: 'This is a info alert—check it out!',
    color: 'secondary',
    variant: 'contained',
    closable: true,
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
        children: 'This is a info alert—check it out!',
    }
)