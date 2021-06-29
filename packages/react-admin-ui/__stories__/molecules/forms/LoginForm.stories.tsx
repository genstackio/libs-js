import { args, s, a } from '../../utils';
import { LoginForm } from '../../../src';

export default {
    title: 'Molecules/forms/LoginForm',
    component: LoginForm,
    argTypes: a({
        color: args.color,
        onSubmit: args._disabledd,
        onRegisterClick: args._disabledd,
        onForgotPasswordClick: args._disabledd,
        defaultValues: args._disabledd,
        variant: args._disabledd,
        socialLogins: args.flag,
    }),
};

const Template = (args) => <LoginForm {...args} />;

export const basic = s(Template, {
    onSubmit: (v) => alert(JSON.stringify(v, null, 4)),
    onForgotPasswordClick: undefined,
    onRegisterClick: undefined,
});

export const prePopulated = s(Template, {
    onSubmit: (v) => alert(JSON.stringify(v, null, 4)),
    onForgotPasswordClick: undefined,
    defaultValues: {
        username: 'olivier@phppro.fr',
        rememberPassword: true,
    },
    onRegisterClick: undefined,
});

export const withSocialLogins = s(Template, {
    onSubmit: (v) => alert(JSON.stringify(v, null, 4)),
    onForgotPasswordClick: undefined,
    socialLogins: true,
    onRegisterClick: undefined,
});

export const allOptions = s(Template, {
    onSubmit: (v) => alert(JSON.stringify(v, null, 4)),
    onForgotPasswordClick: () => alert('forgot password clicked!'),
    onRegisterClick: () => alert('register clicked!'),
    socialLogins: true,
    rememberMe: true,
});
