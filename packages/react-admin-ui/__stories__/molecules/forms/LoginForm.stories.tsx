import {s} from "../../utils";
import {LoginForm} from '../../../src';

export default {
    title: 'Molecules/forms/LoginForm',
    component: LoginForm,
    argTypes: {
    },
}

const Template = args => <LoginForm {...args} />;

export const basic = s(Template, {
})
