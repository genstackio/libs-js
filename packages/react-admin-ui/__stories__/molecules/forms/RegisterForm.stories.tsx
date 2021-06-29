import { args, s, a } from '../../utils';
import { RegisterForm } from '../../../src';

export default {
    title: 'Molecules/forms/RegisterForm',
    component: RegisterForm,
    argTypes: a({
        color: args.color,
        onSubmit: args._disabled,
        onLoginClick: args._disabled,
        onProvacyPolicyClick: args._disabled,
        defaultValues: args._disabled,
        variant: args._disabled,
        socialLogins: args.flag,
    }),
};

const Template = (args) => <RegisterForm {...args} />;

export const basic = s(Template, {
    onSubmit: (v) => alert(JSON.stringify(v, null, 4)),
    onPrivacyPolicyClick: undefined,
    onLoginClick: undefined,
});

export const prePopulated = s(Template, {
    onSubmit: (v) => alert(JSON.stringify(v, null, 4)),
    onPrivacyPolicyClick: undefined,
    defaultValues: {
        username: 'olivier@phppro.fr',
        lastName: 'Hoareau',
        firstName: 'Olivier',
    },
    onLoginClick: undefined,
});

export const withSocialLogins = s(Template, {
    onSubmit: (v) => alert(JSON.stringify(v, null, 4)),
    onPrivacyPolicyClick: undefined,
    socialLogins: true,
    onLoginClick: undefined,
});

export const allOptions = s(Template, {
    onSubmit: (v) => alert(JSON.stringify(v, null, 4)),
    onPrivacyPolicyClick: () => alert('privacy policy clicked!'),
    onLoginClick: () => alert('login clicked!'),
    socialLogins: true,
    rememberMe: true,
});
