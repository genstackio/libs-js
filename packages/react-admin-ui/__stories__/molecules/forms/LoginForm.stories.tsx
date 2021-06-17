import {args, s} from "../../utils";
import {LoginForm} from '../../../src';

export default {
    title: 'Molecules/forms/LoginForm',
    component: LoginForm,
    argTypes: {
        color: args.color,
        onSubmit: args._disable,
        onRegisterClick: args._disable,
        onForgotPasswordClick: args._disable,
        defaultValues: args._disable,
        variant: args._disable,
    },
}

const Template = args => <LoginForm {...args} />;

export const basic = s(Template, {
    onSubmit: v => alert(JSON.stringify(v, null, 4)),
    onForgotPasswordClick: () => alert('forgot password clicked!'),
    onRegisterClick: () => alert('register clicked!'),
})
