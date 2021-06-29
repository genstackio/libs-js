import { args, s, a } from '../../utils';
import { LoginAction } from '../../../src';
import MockPanel from '../../MockPanel';

export default {
    title: 'Molecules/actions/LoginAction',
    component: LoginAction,
    argTypes: a({
        color: args.color,
        onRegisterClick: args._disabled,
        onForgotPasswordClick: args._disabled,
        defaultValues: args._disabled,
        variant: args._disabled,
        socialLogins: args.flag,
    }),
};

const Template = (args) => (
    <>
        <LoginAction {...args} />
        <MockPanel />
    </>
);

export const basic = s(Template, {
    onForgotPasswordClick: undefined,
    onRegisterClick: undefined,
});
