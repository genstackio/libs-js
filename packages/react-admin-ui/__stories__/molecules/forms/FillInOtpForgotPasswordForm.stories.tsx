import { s, a } from '../../utils';
import { FillInOtpForgotPasswordForm } from '../../../src';

export default {
    title: 'Molecules/forms/FillInOtpForgotPasswordForm',
    component: FillInOtpForgotPasswordForm,
    argTypes: a({}),
};

export const basic = s(FillInOtpForgotPasswordForm, {
    onSubmit: (data) => alert(JSON.stringify(data, null, 4)),
    defaultValues: {},
    onLoginCLick: (data) => alert(JSON.stringify(data, null, 4)),
    onSendVerificationCode: () => alert('coucou'),
});
