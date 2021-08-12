import { s, a } from '../../utils';
import { CreatePasswordForgotPasswordForm } from '../../../src';

export default {
    title: 'Molecules/forms/CreatePasswordForgotPasswordForm',
    component: CreatePasswordForgotPasswordForm,
    argTypes: a({}),
};

export const basic = s(CreatePasswordForgotPasswordForm, {
    onSubmit: (data) => alert(JSON.stringify(data, null, 4)),
    defaultValues: {},
    onLoginCLick: (data) => alert(JSON.stringify(data, null, 4)),
    onSendVerificationCode: () => alert('coucou'),
});
