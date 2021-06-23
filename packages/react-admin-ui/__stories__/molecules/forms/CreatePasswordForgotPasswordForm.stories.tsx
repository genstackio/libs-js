import { s, a } from '../../utils';
import { CreatePasswordForgotPasswordForm } from '../../../src';

export default {
    title: 'Molecules/forms/CreatePasswordForgotPasswordForm',
    component: CreatePasswordForgotPasswordForm,
    argTypes: a({}),
};

const Template = (args) => <CreatePasswordForgotPasswordForm {...args} />;

export const basic = s(Template, {
    onSubmit: (data) => alert(JSON.stringify(data, null, 4)),
    defaults: {},
    onLoginCLick: (data) => alert(JSON.stringify(data, null, 4)),
    onSendVerificationCode: () => alert('coucou'),
});
