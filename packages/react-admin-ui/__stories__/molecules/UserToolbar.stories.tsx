import { s, a } from '../utils';
import { UserToolbar } from '../../src';

export default {
    title: 'Molecules/UserToolbar',
    component: UserToolbar,
    argTypes: a({}),
};

const Template = (args) => <UserToolbar {...args} />;

export const basic = s(Template, {
    user: {firstName: 'Alphonse', lastName: 'Daudet', email: 'me@email.com'},
});
