import {s} from "../../utils";
import {ForgotPasswordForm} from '../../../src';


export default {
    title: 'Molecules/forms/ForgotPasswordForm',
    component: ForgotPasswordForm,
    argTypes: {
    },
}

const Template = args => <ForgotPasswordForm {...args} />;

export const basic = s(Template, {
    onSubmit: data => alert(JSON.stringify(data, null, 4)),
    defaults : {},
    onLoginCLick : data => alert(JSON.stringify(data, null, 4)),
    onSendVerificationCode : () => alert('coucou'),
})
