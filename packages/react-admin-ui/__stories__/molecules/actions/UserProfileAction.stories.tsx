import { args, s, a } from '../../utils';
import { UserProfileAction } from '../../../src';
import MockPanel from '../../MockPanel';

export default {
    title: 'Molecules/actions/UserProfileAction',
    component: UserProfileAction,
    argTypes: a({
        color: args.color,
        onRegisterClick: args._disabled,
        onForgotPasswordClick: args._disabled,
        defaultValues: args._disabled,
        variant: args._disabled,
    }),
};

const Template = (args) => (
    <>
        <UserProfileAction {...args} />
        <MockPanel />
    </>
);

export const basic = s(Template, {});
