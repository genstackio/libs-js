import {s} from "../../utils";
import {SendOtpForgotPasswordForm} from '../../../src';


export default {
    title: 'Molecules/forms/SendOtpForgotPasswordForm',
    component: SendOtpForgotPasswordForm,
    argTypes: {
    },
}

const Template = args => <SendOtpForgotPasswordForm {...args} />;

export const basic = s(Template, {
    onSubmit: data => alert(JSON.stringify(data, null, 4)),
    defaults : {},
    onLoginCLick : data => alert(JSON.stringify(data, null, 4)),
    onSendVerificationCode : () => alert('coucou'),
})
