import { args, a, s } from '../../utils';
import { UserProfileForm } from '../../../src';
export default {
    title: 'Molecules/forms/UserProfileForm',
    component: UserProfileForm,
    argTypes: a({
        color: args.color,
        onSubmit: args._disabled,
        defaultValues: args._disabled,
        variant: args._disabled,
    }),
};

export const basic = s(UserProfileForm, {});
