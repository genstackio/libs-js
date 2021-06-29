import { args, a, s } from '../../utils';
import { ChangePasswordForm } from '../../../src';

export default {
    title: 'Molecules/forms/ChangePasswordForm',
    component: ChangePasswordForm,
    argTypes: a({
        color: args.color,
        onSubmit: args._disabled,
        defaultValues: args._disabled,
        variant: args._disabled,
    }),
};

const Template = (args) => <ChangePasswordForm {...args} />;

export const basic = s(Template, {});
