import {s, a} from '../../utils';
import {FillInOtpForgotPasswordForm} from '../../../src';


export default {
    title: 'Molecules/forms/FillInOtpForgotPasswordForm',
    component: FillInOtpForgotPasswordForm,
    argTypes: a({
    }),
}

const Template = args => <FillInOtpForgotPasswordForm {...args} />;

export const basic = s(Template, {
    onSubmit: data => alert(JSON.stringify(data, null, 4)),
    defaults : {},
    onLoginCLick : data => alert(JSON.stringify(data, null, 4)),
    onSendVerificationCode : () => alert('coucou'),
})
