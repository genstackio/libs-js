import { args, a, s } from '../../utils';
import { ChangePasswordForm } from '../../../src';

export default {
    title: 'Molecules/forms/ChangePasswordForm',
    component: ChangePasswordForm,
    argTypes: a({
        color: args.color,
        onSubmit: args._disable,
        defaultValues: args._disable,
        variant: args._disable,
    }),
};

const Template = (args) => <ChangePasswordForm {...args} />;

export const basic = s(Template, {});
