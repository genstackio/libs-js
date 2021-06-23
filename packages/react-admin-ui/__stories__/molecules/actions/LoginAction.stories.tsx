import { args, s, a } from '../../utils';
import { LoginAction } from '../../../src';
import MockPanel from '../../MockPanel';

export default {
    title: 'Molecules/actions/LoginAction',
    component: LoginAction,
    argTypes: a({
        color: args.color,
        onRegisterClick: args._disable,
        onForgotPasswordClick: args._disable,
        defaultValues: args._disable,
        variant: args._disable,
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
