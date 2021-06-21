import {args, s, a} from "../utils";
import {ButtonsGroup} from '../../src';

export default {
    title: 'Molecules/ButtonsGroup',
    component: ButtonsGroup,
    argTypes: a({
        actions : args.actions,
    }),
}

const Template = args => <ButtonsGroup {...args} />

export const basic = s(Template, {
    actions: [
        {
            color: 'primary',
            variant: 'contained',
            label: 'Create New Project',
            target: () => alert('Clicked'),
            icon: 'add_box_outlined',
        },
        {
            color: 'secondary',
            variant: 'contained',
            label: 'Cancel',
            icon: 'arrow_back_outlined',
        },
        {
            color: 'light',
            variant: 'contained',
            label: 'Third',
            target: 'https://www.google.com/',
        },
    ]
});
