import { args, s, a } from '../../utils';
import { LoginForm } from '../../../src';

export default {
    title: 'Molecules/forms/LoginForm',
    component: LoginForm,
    argTypes: a({
        color: args.color,
        onSubmit: args._disabled,
        onRegisterClick: args._disabled,
        onForgotPasswordClick: args._disabled,
        defaultValues: args._disabled,
        variant: args._disabled,
        socialLogins: args.flag,
    }),
};

export const basic = s(LoginForm, {
    onSubmit: (v) => alert(JSON.stringify(v, null, 4)),
    onForgotPasswordClick: undefined,
    onRegisterClick: undefined,
});

export const prePopulated = s(LoginForm, {
    onSubmit: (v) => alert(JSON.stringify(v, null, 4)),
    onForgotPasswordClick: undefined,
    defaultValues: {
        username: 'olivier@phppro.fr',
        rememberPassword: true,
    },
    onRegisterClick: undefined,
});

export const withSocialLogins = s(LoginForm, {
    onSubmit: (v) => alert(JSON.stringify(v, null, 4)),
    onForgotPasswordClick: undefined,
    socialLogins: true,
    onRegisterClick: undefined,
});

export const allOptions = s(LoginForm, {
    onSubmit: (v) => alert(JSON.stringify(v, null, 4)),
    onForgotPasswordClick: () => alert('forgot password clicked!'),
    onRegisterClick: () => alert('register clicked!'),
    socialLogins: true,
    rememberMe: true,
});
