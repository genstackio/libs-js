import { s, args, a } from '../../utils';
import { SendOtpForgotPasswordForm } from '../../../src';

export default {
    title: 'Molecules/forms/SendOtpForgotPasswordForm',
    component: SendOtpForgotPasswordForm,
    argTypes: a({
        color: args.color,
    }),
};

export const basic = s(SendOtpForgotPasswordForm, {
    onSubmit: (data) => alert(JSON.stringify(data, null, 4)),
    defaultValues: {},
    onLoginCLick: (data) => alert(JSON.stringify(data, null, 4)),
    onSendVerificationCode: () => alert('coucou'),
});
