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

export const basic = s(ChangePasswordForm, {});
