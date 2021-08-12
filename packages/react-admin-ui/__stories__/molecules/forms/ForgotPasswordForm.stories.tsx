import { s, a } from '../../utils';
import { ForgotPasswordForm } from '../../../src';

export default {
    title: 'Molecules/forms/ForgotPasswordForm',
    component: ForgotPasswordForm,
    argTypes: a({}),
};

export const basic = s(ForgotPasswordForm, {
    onSubmit: (data) => alert(JSON.stringify(data, null, 4)),
    defaultValues: {},
    onLoginCLick: (data) => alert(JSON.stringify(data, null, 4)),
    onSendVerificationCode: () => alert('coucou'),
});
