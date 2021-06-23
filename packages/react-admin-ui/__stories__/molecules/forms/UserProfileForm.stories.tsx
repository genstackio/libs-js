import { args, a, s } from '../../utils';
import { UserProfileForm } from '../../../src';
export default {
    title: 'Molecules/forms/UserProfileForm',
    component: UserProfileForm,
    argTypes: a({
        color: args.color,
        onSubmit: args._disable,
        defaultValues: args._disable,
        variant: args._disable,
    }),
};

const Template = (args) => <UserProfileForm {...args} />;

export const basic = s(Template, {});
