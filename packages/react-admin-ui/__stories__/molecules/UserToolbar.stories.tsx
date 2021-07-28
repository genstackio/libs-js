import { s, a } from '../utils';
import { Button, UserToolbar } from '../../src';

export default {
    title: 'Molecules/UserToolbar',
    component: UserToolbar,
    argTypes: a({}),
};

const Template = (args) => <UserToolbar {...args} />;

export const basic = s(Template, {
    user: { firstName: 'Alphonse', lastName: 'Daudet', email: 'me@email.com' },
});

export const withAll = s(Template, {
    user: { firstName: 'Alphonse', lastName: 'Daudet', email: 'me@email.com' },
    userMenu: [
        {
            icon: 'person',
            label: 'Account',
            target: 'https://www.google.com/',
        },
        {
            icon: 'settings',
            label: 'Settings',
            target: 'https://www.google.com/',
        },
        {
            icon: 'exit_to_app',
            label: 'Logout',
            target: () => alert('Logout'),
        },
    ],
    children: (
        <div className={'flex space-x-4'}>
            <Button color={'primary'} variant={'outlined'} className={'sm:hidden'}>
                Bonus UI
            </Button>
            <Button color={'secondary'} variant={'outlined'} className={'sm:hidden'}>
                Level Menu
            </Button>
        </div>
    ),
});

export const withSomeButtons = s(Template, {
    user: { firstName: 'Alphonse', lastName: 'Daudet', email: 'me@email.com' },
    fullScreenEnabled: true,
    shoppingCartEnabled: true,
    notificationsEnabled: true,
    languageEnabled: true,
});

export const withAllButtons = s(Template, {
    user: { firstName: 'Alphonse', lastName: 'Daudet', email: 'me@email.com' },
    fullScreenEnabled: true,
    shoppingCartEnabled: true,
    notificationsEnabled: true,
    darkModeEnabled: true,
    messagesEnabled: true,
    searchBarEnabled: true,
    languageEnabled: true,
    favoritesEnabled: true,
});
