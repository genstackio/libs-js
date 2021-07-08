import { s, a } from '../utils';
import LoginScreen from '../../src/screens/LoginScreen';

export default {
    title: 'Screens/LoginScreen',
    component: LoginScreen,
    argTypes: a({}),
};

const Template = (args) => <LoginScreen {...args} />;

export const basic = s(Template, {});
