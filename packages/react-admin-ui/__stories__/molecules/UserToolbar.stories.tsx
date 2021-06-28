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

export const withLocalSwitcher = s(Template, {
    user: {firstName: 'Alphonse', lastName: 'Daudet', email: 'me@email.com'},
    locales: [
        {value: 'fr-FR', language: 'Français'},
        {value: 'en-US', language: 'Anglais (US)'},
    ]
});
